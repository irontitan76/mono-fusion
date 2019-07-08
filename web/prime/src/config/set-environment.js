const fs = require('fs');

const dotEnvExists = fs.existsSync('.env');
if (dotEnvExists) {
  console.log('set-environment: .env exists, probably running on development environment');
  process.exit();
}

// On Google Cloud Platform authentication is handled for us
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

// const bucketName = `envvars.${process.env.GCLOUD_PROJECT}.com`
const bucketName = `fusion-dev-envvars`;
console.log(`Downloading .env from bucket "${bucketName}"`);
storage
  .bucket(bucketName)
  .file('.env')
  .download({ destination: '.env' })
  .then(() => {
    console.info('set-environment: .env downloaded successfully')
  })
  .catch(e => {
    console.error(`set-environment: There was an error: ${JSON.stringify(e, undefined, 2)}`)
  });