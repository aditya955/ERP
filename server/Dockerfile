FROM node:18-alpine3.17

COPY server.js /server/
COPY package.json /server/
COPY .env /server/
COPY models /server/models/

WORKDIR /server

RUN npm install