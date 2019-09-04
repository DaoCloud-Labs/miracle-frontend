#!/bin/sh
# Update nginx config
PROXY_PASS=$(grep miracle /etc/hosts | awk '{print $2}' | awk -F '-' '{print $1"-"$2"-"$3"-service"}')
sed -i "s/proxy_pass.*/proxy_pass http:\/\/${PROXY_PASS}:8080;/" /etc/nginx/nginx.conf
# Start nginx
nginx -c /etc/nginx/nginx.conf -g "daemon off;"

