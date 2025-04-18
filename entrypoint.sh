#!/bin/bash

# Générer le certificat si absent
if [ ! -f /etc/letsencrypt/live/aitalla.cloud/fullchain.pem ]; then
    certbot certonly --webroot -w /usr/share/nginx/html -d aitalla.cloud -d www.aitalla.cloud --agree-tos --email ton@email.com --non-interactive
fi

# Lancer NGINX
exec nginx -g "daemon off;"