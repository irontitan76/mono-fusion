#!/usr/bin/env bash

function reset_modules {
  echo "Deleting all node_modules file within the repository."
  find . -name \"node_modules\" -type d -prune -exec rm -rf '{}' +
}
