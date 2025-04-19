#!/bin/bash

docker run --rm \
  -v "/home/ubuntu/devops-adam/certbot/conf:/etc/letsencrypt" \
  -v "/home/ubuntu/devops-adam/certbot/www:/var/www/certbot" \
  certbot/certbot renew

docker-compose restart nginx
