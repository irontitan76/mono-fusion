import sharp from 'sharp';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

export default ({
  blur,
  cropMode,
  height,
  width,
  quality,
}) => {
  const sharpObj = sharp();
  // Width and height set...
  if (Number.isInteger(height) && Number.isInteger(width)) {
    sharpObj.resize(width, height);

  // Only width set...
  } else if (isNumeric(width)) {
    sharpObj.resize(width);

  // Only height set...
  } else if (isNumeric(height)){
    sharpObj.resize(null, height);
  }

  // Blur
  if (isNumeric(blur)) {
    // Clamp between 0.3 and 1000
    sharpObj.blur(Math.min(1000, Math.max(blur, 0.3)));
  }

  // Crop mode
  if (sharp.gravity[cropMode]) {
    sharpObj.crop(sharp.gravity[cropMode]);
  } else if (sharp.strategy[cropMode]) {
    sharpObj.crop(sharp.strategy[cropMode]);
  }

  // JPEG quality
  sharpObj.jpeg({
    quality: isNumeric(quality) ? Math.max(1, Math.min(100, quality)) : 80,
  });
  
  return sharpObj;
}