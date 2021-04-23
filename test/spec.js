const { expect } = require('chai');
const app = require('supertest')(require('../app'));

describe('Basic Test', () => {
  it('Passes A Test', () => {
    expect('hello').to.equal('hello');
  });
  it('Passes Another Test', () => {
    expect('hello').to.equal('hello');
  });
});

describe('Routes', () => {
  describe('GET /', () => {
    it('shows information about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme Api');
    });
  });
});
