# 🚀 Projet DevOps – Déploiement Dockerisé avec HTTPS sur AWS EC2

Déploiement d’un site web statique (CV HTML/CSS/JS) sur une instance AWS EC2 via Docker, avec HTTPS sécurisé par Certbot/Let's Encrypt et automatisation du renouvellement de certificat. Le tout est relié à un pipeline CI/CD GitHub Actions.

## 🧰 Technologies utilisées

- 🐳 Docker & Docker Compose
- 🌐 Nginx
- 🔐 Certbot (Let's Encrypt)
- ☁️ AWS EC2 (Ubuntu 22.04)
- 🧪 GitHub Actions (CI/CD)
- 💻 HTML / CSS / JS

## 📦 Arborescence du projet


## ⚙️ Fonctionnement global

1. Lancement du site web avec `docker-compose up -d`
2. Nginx sert le site web en HTTP + HTTPS
3. Certbot génère les certificats dans `./certbot/`
4. GitHub Actions déploie automatiquement à chaque push
5. Cron job Linux exécute `renew_cert.sh` une fois par mois pour renouveler les certificats

## 🔄 Automatisation via GitHub Actions

Le pipeline CI/CD (dans `.github/workflows/deploy.yml`) :

- Se connecte en SSH à la VM EC2
- Fait un `git pull`
- Stoppe le conteneur
- Rebuild l’image Docker (`Dockerfile`)
- Relance le conteneur avec les nouveaux fichiers

✅ Le site est donc toujours à jour et sécurisé, sans action manuelle.

## 🔒 HTTPS & Renouvellement

- Certbot utilise le mode `--webroot`
- Les certificats sont stockés dans `./certbot/`
- Le fichier `renew_cert.sh` est exécuté automatiquement chaque mois via `crontab` pour renouveler le certificat
- Le site reste accessible en HTTPS sans intervention

## ✨ Résultat final

- https://aitalla.cloud → Site personnel en HTTPS
- Déploiement 100% automatisé
- Architecture claire, maintenable et scalable
