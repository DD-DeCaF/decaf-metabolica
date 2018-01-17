FROM node:latest
RUN mkdir -p /usr/share/decaf/frontend
ADD . /usr/share/decaf/frontend
WORKDIR /usr/share/decaf/frontend

RUN chmod -R 755 /usr/share/decaf/frontend/dist
