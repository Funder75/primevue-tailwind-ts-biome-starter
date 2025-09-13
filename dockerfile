# Stage 1: build
##FROM nginx:1.29-alpine-slim
##WORKDIR /app
##COPY ./dist ./dist
# RUN npm install
# RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]