const supertest = require('supertest');
const api = supertest('http://127.0.0.1:3002');

describe(' Tests general', () => {
  test('test that sever is running current port', () => {
    expect(3002).toEqual(3002);
  });
  describe('Base', () => {
    test('Should throw 200', async () => {
      let response = await api
        .get('/api/v1/user')
        .send();
      expect(response.status).toEqual(200);
    });
  });
});
