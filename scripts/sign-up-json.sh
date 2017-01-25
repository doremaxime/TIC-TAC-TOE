#!/bin/bash

# example:
# API="http://httpbin.org" API_PATH="/post" scripts/sign-up.sh

curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'${EMAIL}'",
      "password": "'${PASSWORD}'",
      "password_confirmation": "'${PASSWORD}'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo

# API="http://localhost:4741" API_PATH="/sign-up" EMAIL="max@max" PASSWORD="max" CONFIRM_CONFIRMATION="max" scripts/sign-up-json.sh
