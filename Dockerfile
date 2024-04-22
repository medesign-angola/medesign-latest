# Stage 0: compile angular frontend
FROM node:18.17.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG CONFIG=qa
ARG BASE_URL=/
RUN npm run build

# Stage 1: serve app with nginx server
# FROM nginx:latest
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist/medesign-latest/browser /usr/share/nginx/html

# FROM node:18.17.0-alpine as ssr-server
# COPY --from=build /app/dist /app/dist
# COPY ./package.json /app/package.json
# WORKDIR /app
EXPOSE 4000

CMD ["node", "dist/medesign-latest/server/server.mjs"]

# EXPOSE 80