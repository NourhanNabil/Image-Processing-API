import { Router, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
// import { promises as fs } from 'fs';

const imagesRoutes = Router();

// images names avaiable to use in the query params(name)
const images: string[] = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

imagesRoutes.get('/', async (req: Request, res: Response) => {
  const imageName = req.query.imageName as string;
  const height = req.query.height as string;
  const width = req.query.width as string;
  // full image
  const fullImagesPath =
    path.resolve('./') + `/images/fullImages/${imageName}.jpg`;
  // const fullImage = await fs.readFile(fullImagesPath);
  //  resize images
  const resizeImagesPath =
    path.resolve('./') +
    `/images/resizeImages/${imageName}_${width}_${height}.jpg`;
  const image = images.includes(imageName);
  if (imageName === undefined || imageName === '') {
    return res
      .status(400)
      .send('Bad request, query parameter imageName is missing.');
  }
  if (image === false) {
    return res.status(404).send('This image does not exist!');
  }
  if (height === undefined && width) {
    return res
      .status(400)
      .send('Bad request, query parameter height is missing.');
  }
  if (width === undefined && height) {
    return res
      .status(400)
      .send('Bad request, query parameter width is missing.');
  }
  if (width === '' || height === '') {
    return res
      .status(400)
      .send(
        'Bad request, neither query parameter width nor height can be equal null.'
      );
  }
  if (height && width) {
    await sharp(fullImagesPath)
      .resize(parseInt(width), parseInt(height))
      .toFile(resizeImagesPath);
    return res.sendFile(resizeImagesPath);
  }
  res.sendFile(fullImagesPath);
});

export default imagesRoutes;
