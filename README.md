![Fusion Logo](./web/me/static/images/fusion-banner.png)

> NOTE: This project is currently in pre-alpha stages.

## Getting Started

Welcome to Fusion Technologies' monorepository.

## Folder Structure
- packages/ (common API, components, etc.)
- scripts/ (clean, build, test, deploy)
- services/ (data services, apps, etc.)
- .gitignore
- package.json
- README.md
- yarn.lcok

## TODO ITEMS
- Functions to deploy apps in build package
  - gcloud app deploy web/corp/app.yaml
  - gcloud app deploy web/interact/app.yaml
  - gcloud app deploy web/prime/app.yaml
- Move set-environment.js to build package
- Find a way to have a global .gcloudignore file
- Find a way to have a global .npmrc file
- Move config folder to root web/* folders
- Rename icon.config.js to icons.js and place in src/
- Move manifest.js and serviceWorker.js to src/
- Create an image service or use GCP Cloud CDN
- Create Dockerfile for apps
- Set up environments
  - https://cloud.google.com/appengine/docs/standard/go/creating-separate-dev-environments
- Map custom domains
  - https://cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains
- Prerender or server-side render
  - https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319
- Incorporate CircleCI
- SSR && React Helmet
- Create git clone-able template for web apps





## CRA Deploy
- Create Bucket with build folder and app.yaml
- Make folder in project (e.g. test-app)
- Cd into folder and run "gsutil rsync -r gs://straight-veld-8658 ./test-app"
- Run "gcloud app deploy"


"preinstall": "node -r ./src/config/set-environment.js && node -r dotenv/config && npm config set \"@fortawesome:registry\" \"https://npm.fontawesome.com/\" && npm config set \"//npm.fontawesome.com/:_authToken\" \"${NPM_TOKEN}\"",