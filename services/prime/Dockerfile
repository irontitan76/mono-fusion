# Run the following from the project root:
# create cluster with autoscaling
# (one time) gcloud auth configure-docker
# export PROJECT_ID="$(gcloud config get-value project -q)"
# docker build -t gcr.io/${PROJECT_ID}/fusion-prime:v1 .
# docker push gcr.io/${PROJECT_ID}/fusion-prime:v1
# docker run --rm -p 8080:8080 gcr.io/${PROJECT_ID}/fusion-prime:v1
# https://www.sitepoint.com/kubernetes-deploy-node-js-docker-app/

FROM node:10.16.0-alpine
WORKDIR /fusion

ARG fontawesomeApiKey
ARG mongoDbPassword
ARG mongoDbUri
ARG mongoDbUsername
ARG mediaService

ENV FONTAWESOME_API_KEY=$fontawesomeApiKey
ENV RAZZLE_MONGO_DB_PASSWORD=$mongoDbPassword
ENV RAZZLE_MONGO_DB_URI=$mongoDbUri
ENV RAZZLE_MONGO_DB_USERNAME=$mongoDbUsername
ENV RAZZLE_FUSION_MEDIA_SERVICE=$mediaService

COPY package.json .npmrc .env ./
COPY packages/design/package.json ./packages/design/
COPY services/prime/package.json ./services/prime/
RUN apk add --no-cache --update 'nodejs' yarn
RUN yarn global add node-gyp
RUN yarn install --production

COPY packages/design ./packages/design/
COPY services/prime ./services/prime/

WORKDIR /fusion/services/prime
EXPOSE 3000
RUN yarn build
CMD ["yarn", "start:prod"]