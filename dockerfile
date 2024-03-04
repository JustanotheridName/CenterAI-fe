# Użyj oficjalnie utworzonego obrazu Node.js jako bazowego obrazu
FROM node:14-alpine as build-stage

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki zależności pakietów npm
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj wszystkie pozostałe pliki
COPY . .
EXPOSE 8080

# Budowanie aplikacji
RUN npm run build

# Podstawowy obraz serwera HTTP
FROM nginx:1.21-alpine

# Kopiowanie plików zbudowanych z poprzedniego etapu do katalogu domowego serwera nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
