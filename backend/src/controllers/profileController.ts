import { Context, Next } from 'koa'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {
    const ngo_id = context.get('Authorization')
    const incidents = await connection('incidents').where('ngo_id', ngo_id).select('*')

    context.body = incidents
    return next()
}
export const show = async (context: Context, next: Next) => {}
export const store = async (context: Context, next: Next) => {}
export const update = async (context: Context, next: Next) => {}
export const destroy = async (context: Context, next: Next) => {}

export default { index, show, store, update, destroy }
