#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl "http://httpbin.org/patch?id=${ID}" \
  --include \
  --request PATCH \
  --data-urlencode ""

# from api auth solution branch
  # --header "Authorization: Token token=${TOKEN}" \
  # --data-urlencode "passwords[old]=$OLD" \
  # --data-urlencode "passwords[new]=$NEW"


# data output from curl doesn't have a trailing newline
echo
