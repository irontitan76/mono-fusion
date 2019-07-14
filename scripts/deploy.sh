#!/usr/bin/env bash

# Ensure this is chmod +x ./deploy.sh


# https://itnext.io/deploying-a-node-js-app-to-the-google-kubernetes-engine-gke-d6af1f3a954c
# Function to verify we're in correct project based on passed in environment (DEVELOPMENT, STAGING, PRODUCTION)
# Function to verify cluster exists
# Function to create cluster with autoscaling if it doesn't exist
# Function to run apps in docker locally
# Function to build all images according to Dockerfiles
# Function to build a specific image according to Dockerfile
# Function to create deployment for each container
# Function create service for each container when appropriate

function verify_environment {
  local env=$1

  local current=`gcloud config get-value project`
  local created=`gcloud projects list --filter`

}

function deploy {
  local projectId=`gcloud config get-value project -q`

  echo "Building Docker container"
  docker build -f ./services/prime/Dockerfile -t gcr.io/${projectId}/fusion-prime:v1 .

  echo "Pushing Docker container"
  docker push gcr.io/${projectId}/fusion-prime:v1
}


function deploy_v2 {
  # Build all images according to docker-compose.yml
  kompose up

  
}

