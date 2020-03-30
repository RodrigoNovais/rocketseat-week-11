import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'

let id: string

describe('Session', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()

        const response = await request(app.callback())
            .post('/ngo')
            .send({
                name: 'R.Novais',
                email: 'roo.novais@gmail.com',
                whatsapp: '11964009104',
                city: 'São Bernardo do Campo',
                uf: 'SP',
            })

        id = response.body.id
    })

    afterAll(async () => { await connection.destroy() })

    // verify if id is valid
    it('should be able to create a session', async () => {
        const response = await request(app.callback())
            .post('/sessions')
            .send({ id })

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('name')
    })
})
