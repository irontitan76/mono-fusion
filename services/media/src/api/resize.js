import fs from 'fs';
import { resolve } from 'path';
import sharp from 'sharp';

export function resize(path, format, width, height) {
  const readStream = fs.createReadStream(resolve(__dirname, '..', 'static', 'images', path));

  let transform = sharp();

  if (format) {
    transform = transform.toFormat(format);

    if (format === 'png') {
      transform.png({ compressionLevel: 8 });
    } else if (format === 'jpeg') {
      transform.jpeg({ quality: 80 });
    } else if (format === 'webp') {
      transform.webp({ quality: 80 });
    }
  }

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
}

export default resize;