import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing endpointas', () => {
  it('getting endpoint without the imageName parameter', async () => {
    request.get('/images').expect(400);
  });

  it('getting endpoint with a non-existent image', async () => {
    request.get('/images?imageName=abc').expect(404);
  });

  it('getting endpoint with a valid image', async () => {
    await request.get('/images?imageName=fjord').expect(200);
  });
});
