function start {
  echo "[ FUSION ] Setting environment variables according to .env"
  export $(egrep -v '^#' .env | xargs)

  echo "[ FUSION ] Executing start script for ${1}."
  yarn --cwd "services/${1}" start
}