const { expect } = require('chai');
const {
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require('../db');
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

describe('Sequelize', () => {
  beforeEach(async () => {
    await syncAndSeed();
  });

  it('loads all the models', async () => {
    const movies = await Movie.findAll();
    const actors = await Actor.findAll();
    const roles = await Role.findAll();
    expect(movies.length).to.be.greaterThan(0);
    expect(actors.length).to.be.greaterThan(0);
    expect(roles.length).to.be.greaterThan(0);
  });
});
