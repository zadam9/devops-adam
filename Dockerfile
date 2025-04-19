FROM nginx:alpine

COPY ./www/index.html /usr/share/nginx/html/
COPY ./www/style.css /usr/share/nginx/html/
COPY ./www/script.js /usr/share/nginx/html/
# Ne copie assets que s'il existe
COPY ./www/assets /usr/share/nginx/html/assets

EXPOSE 80
