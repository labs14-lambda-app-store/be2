const server = require('./server')
const supertest = require('supertest')

describe('Server', () => {
    it('Should be running on production env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('GET /', () => {
        it('should respond with a 200 status code', () => {
            return supertest(server)
            .get('/'
            ).expect(200)
        })
        it('should return JSON', () => {
            return supertest(server).get('/').expect('content-type', /json/i)
        })
    })
})