const resquest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('shold be able to create a new ONG', async () => {
       const response = await resquest(app)
       .post('/ongs')
       .send({
            name: "Sigmaplast34",
            email: "contato@apad.com.br",
            whatsapp: "11971815817",
            city: "Rio do Sul",
            uf: "SC"
        }); 
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});