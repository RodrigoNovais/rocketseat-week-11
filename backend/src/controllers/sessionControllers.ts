import { Context, Next } from 'koa'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {}
export const show = async (context: Context, next: Next) => {}
export const store = async (context: Context, next: Next) => {
    const { id } = context.request.body

    const ngo = await connection('NGOs').where('id', id).select('name').first()

    if (!ngo) {
        context.status = 400
        context.body = 'No NGO found with this id'

        return next()
    }

    context.body = ngo
    return next()
}
export const update = async (context: Context, next: Next) => {}
export const destroy = async (context: Context, next: Next) => {}

export default { index, show, store, update, destroy }
