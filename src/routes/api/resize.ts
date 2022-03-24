import sharp from 'sharp';
import fs from 'fs';

const resizeImages = async (
  image: string,
  width: number,
  height: number,
  resizeImage: string
): Promise<unknown> => {
  if (!fs.existsSync(resizeImage)) {
    await sharp(image)
      .resize({
        width: width,
        height: height,
      })
      .toFile(resizeImage);
    return resizeImage;
  }
};

export default resizeImages;
