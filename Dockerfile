# Stage 0: compile angular frontend
FROM node:18.17.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG CONFIG=qa
ARG BASE_URL=/
RUN npm run build
EXPOSE 4000

CMD ["node", "dist/medesign-latest/server/server.mjs"]