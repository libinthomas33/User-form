
const request = require('supertest')
const app = require('../server')
describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('API Endpoints', () => {
  it('should send 200 status code on success', async () => {
    const res = await request(app)
      .get('/api')
    expect(res.statusCode).toEqual(200)
  })
})