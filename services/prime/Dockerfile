# Run the following from the project root:
# export PROJECT_ID="$(gcloud config get-value project -q)"
# docker build -t gcr.io/${PROJECT_ID}/fusion-prime:v1 .
# (one time) gcloud auth configure-docker
# docker push gcr.io/${PROJECT_ID}/fusion-prime:v1
# docker run --rm -p 8080:8080 gcr.io/${PROJECT_ID}/fusion-prime:v1

FROM node:10.16.0-alpine
WORKDIR /fusion

ARG FONTAWESOME_API_KEY
ARG MONGO_DB_PASSWORD
ARG MONGO_DB_URI
ARG MONGO_DB_USERNAME

ENV FONTAWESOME_NPM_KEY=$FONTAWESOME_API_TOKEN
ENV RAZZLE_MONGO_DB_PASSWORD=$MONGO_DB_PASSWORD
ENV RAZZLE_MONGO_DB_URI=$MONGO_DB_URI
ENV RAZZLE_MONGO_DB_USERNAME=$MONGO_DB_USERNAME

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