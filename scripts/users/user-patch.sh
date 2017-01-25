#!/bin/bash

curl --include --request PATCH \
http://localhost:4741/users/ \
--header "Content-Type: application/json" \
--data '{
  "user": {
    "email": "maxime@maxime.com",
    "password": "max"
  }
}'



curl --include --request POST \
http://localhost:4741/users/ \
--header "Content-Type: application/json" \
--data '{
  "user": {
    "email": "maxime@maxime.com",
    "password": "max"
  }
}'
