#!/usr/bin/env bash

PROMPT="\033[38;5;27m[ FUSION ]\033[0m"
# exec > >(sed "s/^/`printf "${PROMPT}"` /" >&2)

function setup_workstation {
  echo -e  "Setting up workstation."

  source_scripts
  alias_fusion
  set_bash_profile
  get_env_vars
  export_env_vars

  echo -e  "Completed workstation setup."
}

function source_scripts {
  for file in deploy.sh develop.sh reset.sh
  do
    chmod +x ${PWD}/scripts/${file}
    source ${PWD}/scripts/${file}
  done

  echo -e  "Configured environment with variables and scripts."
}

function alias_fusion {
  echo -e "\nalias fuse='cd ${PWD}'" >> ~/.bash_profile
  echo -e  "Added 'fuse' alias to bash profile."
}

function set_bash_profile {
  echo -e "\nsource ${PWD}/scripts/init.sh" >> ~/.bash_profile
  echo -e  "Added source for scripts to bash profile."
}

function export_env_vars {
  export $(grep -v '^#' .env | xargs -0)
  echo -e "Exported environment variables."
}

function get_env_vars {
  case "$1" in
    production)
      echo -e "Downloading production environment variables."
      gsutil cp gs://fusion-dev-envvars/production.env .env > /dev/null 2>&1
      echo -e "Development environment variables downloaded."
      ;;
    staging)
      echo -e "$Downloading staging environment variables."
      gsutil cp gs://fusion-dev-envvars/staging.env .env > /dev/null 2>&1
      echo -e "Development environment variables downloaded."
      ;;
    *)
      echo -e "Downloading development environment variables"
      gsutil cp gs://fusion-dev-envvars/development.env .env > /dev/null 2>&1
      echo -e "Development environment variables downloaded."
      ;;
  esac
}