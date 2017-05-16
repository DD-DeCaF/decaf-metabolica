FROM node:latest
RUN mkdir /usr/share/frontend
ADD . /usr/share/frontend
WORKDIR /usr/share/frontend

RUN chmod -R 755 /usr/share/frontend-test/dist
