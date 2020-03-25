import { Context, Next } from 'koa'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {
    const ngo_id = context.get('Authorization')
    const incidents = await connection('incidents').where('ngo_id', ngo_id).select('*')

    context.body = incidents
    return next()
}
export default { index }
