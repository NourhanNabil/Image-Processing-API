import { Router, Request, Response } from 'express';
import imagesRoutes from './api/images';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send(
    '<h1 style="text-align:center;">Image Processing API </h1> <p style="font-weight:bold;">available routes /images?imageName=&lt;string:imageName&gt;&width=&lt;string:width&gt;&height=&lt;string:height&gt; </p>'
  );
});

routes.use('/images/', imagesRoutes);

export default routes;
