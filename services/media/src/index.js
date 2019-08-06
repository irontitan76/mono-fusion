import express from 'express';
import config from './api/config';
import resize from './api/resize';

const server = express();

server.get('/api/media/:image', (req, res) => {
  const { format, width, height } = req.query;
  const { image } = req.params;

  let w, h;
  if (width) w = parseInt(width);
  if (height) h = parseInt(height);

  try {
    res.type(`image/${format || 'png'}`);
    resize(image, format, w, h).pipe(res);
  } catch (error) {
    console.log(error);
  }
});

server.listen(config.port, () => {
  console.log(`[ FUSION ] Media service started on port ${config.port}! 🚀`);
});
