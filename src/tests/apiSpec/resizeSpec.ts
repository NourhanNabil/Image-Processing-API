import resizeImages from '../../routes/api/resize';
import path from 'path';

describe('Testing images resize', () => {
  it('to check the cached image', async () => {
    const fullImagesPath = path.resolve('./') + `/images/fullImages/fjord.jpg`;
    const resizeImagesPath =
      path.resolve('./') + `/images/resizeImages/fjord_200_300.jpg`;
    const height = 300;
    const width = 200;
    expect(async () => {
      await resizeImages(fullImagesPath, width, height, resizeImagesPath);
    }).not.toThrow();
  });
  it('check if the height parameter is missing', async () => {
    const fullImagesPath = path.resolve('./') + `/images/fullImages/fjord.jpg`;
    const resizeImagesPath =
      path.resolve('./') + `/images/resizeImages/fjord_200_300.jpg`;
    const height = '';
    const width = 200;
    expect(async () => {
      await resizeImages(
        fullImagesPath,
        width,
        parseInt(height),
        resizeImagesPath
      );
    }).toBeDefined();
  });
});
