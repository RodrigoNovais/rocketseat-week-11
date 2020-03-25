import { Context, Next } from 'koa'
import crypto from 'crypto'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {
    const ongs = await connection('NGOs').select('*')

    context.body = ongs
    return next()
}

export const show = async (context: Context, next: Next) => {}

export const store = async (context: Context, next: Next) => {
    const { name, email, whatsapp, city, uf } = context.request.body
    const id = crypto.randomBytes(12).toString('HEX')

    await connection('NGOs').insert({ id, name, email, whatsapp, city, uf })

    context.body = { id }
    return next()
}

export const update = async (context: Context, next: Next) => {}
export const destroy = async (context: Context, next: Next) => {}

export default { index, show, store, update, destroy }
