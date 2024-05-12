FROM node:alpine AS builder
WORKDIR /wagon-wheel
COPY package*.json ./
COPY . .
RUN yarn install -f
RUN yarn build
FROM nginx:alpine
COPY --from=builder /wagon-wheel/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]