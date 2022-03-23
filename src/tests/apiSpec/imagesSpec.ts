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

describe('Testing images resize', () => {
  it('getting image without the height parameter', async () => {
    request.get('/images?imageName=fjord&width=200').expect(400);
  });

  it('getting image without the width parameter', async () => {
    request.get('/images?imageName=fjord&height=200').expect(400);
  });

  it('getting image with null values for width and height', async () => {
    request.get('/images?imageName=fjord&width=&height=').expect(400);
  });
});
