#!/usr/bin/env bash

function reset_modules {
  find . -name \"node_modules\" -type d -prune -exec rm -rf '{}' +
}

reset_modules
