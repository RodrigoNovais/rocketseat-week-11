import { Context, Next, ParameterizedContext } from 'koa'
import Router from 'koa-router'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {
    const { page = 1, limit = 5 } = context.query

    const [count] = await connection('incidents').count()

    const incidents = await connection('incidents')
        .join('NGOs', 'NGOs.id', '=', 'incidents.ngo_id')
        .limit(limit)
        .offset((page - 1) * limit)
        .select([
            'incidents.*',
            'NGOs.name',
            'NGOs.email',
            'NGOs.whatsapp',
            'NGOs.city',
            'NGOs.uf'
        ])

    context.set('X-Total-Count', count['count(*)'])
    context.body = incidents

    return next()
}

export const store = async (context: Context, next: Next) => {
    const { title, description, value } = context.request.body
    const ngo_id = context.get('Authorization')

    const [id] = await connection('incidents').insert({ title, description, value, ngo_id })

    context.body = { id }
    return next()
}

export const destroy = async (context: ParameterizedContext<any, Router.IRouterParamContext<any, {}>>, next: Next) => {
    const { id } = context.params
    const ngo_id = context.get('Authorization')

    const incident = await connection('incidents')
        .where('id', id)
        .select('ngo_id')
        .first()

    if (incident.ngo_id !== ngo_id) {
        context.status = 401
        context.body = 'Operation not permitted'

        return next()
    }

    await connection('incidents').where('id', id).delete()

    context.status = 204
    return next()
}

export default { index, store, destroy }
