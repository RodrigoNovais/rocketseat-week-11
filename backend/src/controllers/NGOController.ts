import { Context, Next } from 'koa'
import connection from '../database/connection'

import generateUniqueId from '../utils/generateUniqueId'

export const index = async (context: Context, next: Next) => {
    const ongs = await connection('NGOs').select('*')

    context.body = ongs
    return next()
}

export const store = async (context: Context, next: Next) => {
    const { name, email, whatsapp, city, uf } = context.request.body
    const id = generateUniqueId()

    await connection('NGOs').insert({ id, name, email, whatsapp, city, uf })

    context.body = { id }
    return next()
}

export default { index, store }
