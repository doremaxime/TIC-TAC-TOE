#!/bin/bash

curl "${API}${API_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'${OLD}'",
      "new": "'${NEW}'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
