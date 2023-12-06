# Utilisation d'une image de base contenant Node.js
FROM node:14

# Création du répertoire de travail pour l'application dans le conteneur
WORKDIR /usr/src/app

# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances de l'application
RUN npm install

# Copie de tout le code source de l'application dans le conteneur
COPY . .

# Construction de l'application pour la production
RUN npm run build

# Port sur lequel le serveur de développement Vite écoute 
EXPOSE 3000

# Commande pour démarrer l'application Vite lorsque le conteneur démarre
CMD ["npm", "run", "serve"]
