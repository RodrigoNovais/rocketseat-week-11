import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'

describe('NGO', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => { await connection.destroy() })

    it('should be able to create a new NGO account', async () => {
        const response = await request(app.callback())
            .post('/ngo')
            .send({
                name: 'R.Novais',
                email: 'roo.novais@gmail.com',
                whatsapp: '11964009104',
                city: 'São Bernardo do Campo',
                uf: 'SP',
            })

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(24)
    })

    it('should be able to return a NGO list', async () => {
        const response = await request(app.callback())
            .get('/ngo')

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('length')

        if (response.body[0]) {
            expect(response.body[0]).toHaveProperty('id')
            expect(response.body[0]).toHaveProperty('name')
            expect(response.body[0]).toHaveProperty('email')
            expect(response.body[0]).toHaveProperty('whatsapp')
            expect(response.body[0]).toHaveProperty('city')
            expect(response.body[0]).toHaveProperty('uf')
        }
    })
})
