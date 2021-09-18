
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

describe('API Endpoints', () => {
  it('should send 200 status code on successfull user registration', async () => {
    const res = await request(app)
      .post('/api/user/save')
      .send({
        email: "jesttest@email.com",
        firstname: "jest_firstname",
        lastname: "jest_firstname",
        phone: 4394823948
      })
    expect(res.statusCode).toEqual(200)
  })
})

describe('API Endpoints', () => {
  it('should send 200 status code on successfull user fetch from DB', async () => {
    const res = await request(app)
      .get('/api/user/list')
       expect(res.statusCode).toEqual(200)
  })
})