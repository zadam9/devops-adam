FROM nginx:alpine

# Copier le fichier index.html
COPY ./www/index.html /usr/share/nginx/html/

# Copier tous les fichiers CSS
COPY ./www/assets/css /usr/share/nginx/html/assets/css

# Copier tous les fichiers JavaScript
COPY ./www/assets/js /usr/share/nginx/html/assets/js

# Copier tous les fichiers d'images
COPY ./www/assets/images /usr/share/nginx/html/assets/images

# Copier tous les fichiers d'icônes
COPY ./www/assets/icons /usr/share/nginx/html/assets/icons

# Copier tous les fichiers de projets
COPY ./www/assets/project /usr/share/nginx/html/assets/project

# Copier tous les fichiers de certifications
COPY ./www/assets/certifications /usr/share/nginx/html/assets/certifications

# Copier tous les fichiers favicon
COPY ./www/assets/favicon /usr/share/nginx/html/assets/favicon

EXPOSE 80
