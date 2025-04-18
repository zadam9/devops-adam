#!/bin/sh

echo "Lancement de NGINX (HTTP uniquement, sans Certbot)..."
nginx -g "daemon off;"
