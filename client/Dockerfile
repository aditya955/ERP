FROM node:18-alpine3.17

COPY public /client/public/
COPY src /client/src/
COPY package.json /client/

WORKDIR /client

RUN npm install