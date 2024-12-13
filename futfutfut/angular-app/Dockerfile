# Étape 1 : Construction de l'application Angular
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Serveur Web NGINX
FROM nginx:alpine
COPY --from=build /app/dist/front /usr/share/nginx/html
EXPOSE 80
