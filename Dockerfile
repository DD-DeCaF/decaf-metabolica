FROM nginx:1.13
# RUN mkdir -p /usr/share/decaf/frontend
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
