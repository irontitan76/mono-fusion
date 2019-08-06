function start {
  echo "Setting environment variables according to .env"
  export SKIP_PREFLIGHT_CHECK=true
  
  local FILE=./.env
  if [ -f "${FILE}" ]; then
    export $(egrep -v '^#' .env | xargs)
  fi

  echo "Executing start script for ${1}."
  yarn --cwd "services/${1}" start
}