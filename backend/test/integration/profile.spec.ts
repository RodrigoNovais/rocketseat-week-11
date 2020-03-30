import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'

let id: string

describe('Profile', () => {
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

    it('should be able to return a incidents list', async () => {
        const response = await request(app.callback())
            .get('/profile')
            .set('Authorization', id)

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('length')

        if (response.body[0]) {
            expect(response.body[0]).toHaveProperty('id')
            expect(response.body[0]).toHaveProperty('title')
            expect(response.body[0]).toHaveProperty('description')
            expect(response.body[0]).toHaveProperty('value')
            expect(response.body[0]).toHaveProperty('ngo_id')
        }
    })
})
