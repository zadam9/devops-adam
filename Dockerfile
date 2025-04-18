FROM nginx:alpine

# Installer Certbot + Bash
RUN apk update && apk add certbot bash openssl && \
    mkdir -p /etc/letsencrypt/live

# Copier les fichiers du site
COPY ./site /usr/share/nginx/html

# Copier les fichiers de conf NGINX
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copier le script d'entrée
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80 443

ENTRYPOINT ["/entrypoint.sh"]