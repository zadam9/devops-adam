FROM nginx:alpine

# Copie de tes fichiers dans NGINX
COPY ./index.html /usr/share/nginx/html/
COPY ./css /usr/share/nginx/html/css
COPY ./js /usr/share/nginx/html/js
COPY ./assets /usr/share/nginx/html/assets

# Pas de certbot, pas d’entrypoint chelou
EXPOSE 80
