FROM nginx:alpine

COPY ./www/index.html /usr/share/nginx/html/
COPY ./www/css /usr/share/nginx/html/css
COPY ./www/js /usr/share/nginx/html/js
COPY ./www/assets /usr/share/nginx/html/assets

EXPOSE 80
