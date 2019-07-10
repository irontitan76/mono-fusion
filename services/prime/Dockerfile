# export PROJECT_ID="$(gcloud config get-value project -q)"
# docker build -t gcr.io/${PROJECT_ID}/fusion-prime:v1 .
# docker push gcr.io/${PROJECT_ID}/fusion-prime:v1
# docker run --rm -p 8080:8080 gcr.io/${PROJECT_ID}/fusion-prime:v1

# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
FROM alpine:latest
WORKDIR /usr/src/app
RUN apk add --no-cache --update 'nodejs' yarn
RUN yarn global add node-gyp
RUN export PATH=$PATH:./node_modules/.bin
ADD package.json yarn.lock .npmrc .env ./
RUN yarn install -s --ignore-scripts
ADD . .
RUN yarn build
CMD ["yarn", "start"]
