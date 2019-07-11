#!/usr/bin/env bash

# Ensure this is chmod +x ./deploy.sh

function deploy {
  local projectId=`gcloud config get-value project -q`

  echo "Building Docker container"
  docker build -f ./services/prime/Dockerfile -t gcr.io/${projectId}/fusion-prime:v1 .

  echo "Pushing Docker container"
  docker push gcr.io/${projectId}/fusion-prime:v1

  echo "Running Docker container locally"
  # docker run --rm -p 9080:9080 gcr.io/${PROJECT_ID}/fusion-prime:v1
}

deploy

