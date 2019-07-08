const fs = require('fs').promises; // Experimental API
const path = require('path');

const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const bucketName = 'fusion-dev-prime';
const build = 'build/';
const app = 'app.yaml';

// Recursively walks through the directory and executes the passed-in function on each file
async function walk(dir, fn) {
  let files = await fs.readdir(dir);
  files = await Promise.all(files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        return walk(filePath, fn);
      } else if(stats.isFile()) {
        if (fn) fn(filePath);
        return filePath;
      }
  }));

  // Returns file path strings in array
  return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

async function upload(file) {
  await storage.bucket(bucketName).upload(file, { destination: file, gzip: true });
  return console.info(`Uploaded file: ${file}`);
};

// Folder upload
walk(build, upload);

// File upload
upload(app);
  