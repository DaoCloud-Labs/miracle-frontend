#!/bin/sh

# Update nginx config
[[ -z "${SERVICE_HOST}" ]] && {
    echo "No SERVICE_HOST"
    exit 1
}
sed -i "s/proxy_pass.*/proxy_pass http:\/\/${SERVICE_HOST}:8080;/" /etc/nginx/nginx.conf

# Start nginx
nginx -c /etc/nginx/nginx.conf -g "daemon off;"

