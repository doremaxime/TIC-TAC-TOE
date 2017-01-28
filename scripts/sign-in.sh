#!/bin/bash

# API="http://httpbin.org" API_PATH="/post" scripts/sign-in.sh
curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --data-urlencode "'${DATA}'"

  #
  # from auth api solution branch
  #   --data-urlencode "credentials[email]=$EMAIL" \
  #   --data-urlencode "credentials[password]=$PASSWORD"

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
