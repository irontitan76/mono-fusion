#!/usr/bin/env bash
echo $1

function setup_workstation {
  alias_fusion
  set_bash_profile
  get_env_vars
  export_env_vars
}

function get_env_vars {
  case "$1" in
    production)
      echo "[ENV]: Downloading production environment variables"
      gsutil cp gs://fusion-dev-envvars/production.env .env
      ;;
    staging)
      echo "[ENV]: Downloading staging environment variables"
      gsutil cp gs://fusion-dev-envvars/staging.env .env
      ;;
    *)
      echo "[ENV]: Downloading development environment variables"
      gsutil cp gs://fusion-dev-envvars/development.env .env
      ;;
  esac
}

function export_env_vars {
  export $(grep -v '^#' .env | xargs -0)
}

function set_bash_profile {
  echo -e "\nsource ${PWD}/scripts/setup.sh" >> ~/.bash_profile
}

function alias_fusion {
  echo -e "\nalias fuse='cd ${PWD}'" >> ~/.bash_profile
}