FROM node:24-alpine AS build-stage

WORKDIR /app
COPY package*.json ./

RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]