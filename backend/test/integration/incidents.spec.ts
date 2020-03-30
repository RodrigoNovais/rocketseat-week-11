import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'

let id: string

describe('Incidents', () => {
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

    it('should be able to create an incidents for a NGO', async () => {
        const response = await request(app.callback())
            .post('/incidents')
            .set('Authorization', id)
            .send({
                title: 'Gato escaldado',
                description: 'Uma gata foi resgatada de um lago no centro da cidade e precisa de cuidados imediatos',
                value: 50
            })

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
    })

    it('should be able to return a incidents list', async () => {
        const response = await request(app.callback())
            .get('/incidents')
            .query({
                page: 1,
                limit: 10,
            })

        expect(response.type).toMatch(/json/)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('length')

        if (response.body[0]) {
            expect(response.body[0]).toHaveProperty('id')
            expect(response.body[0]).toHaveProperty('title')
            expect(response.body[0]).toHaveProperty('description')
            expect(response.body[0]).toHaveProperty('value')
            expect(response.body[0]).toHaveProperty('ngo_id')
            expect(response.body[0]).toHaveProperty('name')
            expect(response.body[0]).toHaveProperty('email')
            expect(response.body[0]).toHaveProperty('whatsapp')
            expect(response.body[0]).toHaveProperty('city')
            expect(response.body[0]).toHaveProperty('uf')
        }
    })

    // verify of an id has been sent
    // verify if id is valid
    // verify if id exists

    it('should be able to remove an incidents from the NGO\'s list', async () => {
        const response = await request(app.callback())
            .delete('/incidents/1')
            .set('Authorization', id)

        expect(response.status).toBe(204)
    })
})
