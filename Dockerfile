FROM node:latest
RUN mkdir /usr/share/frontend-test
ADD . /usr/share/frontend-test
WORKDIR /usr/share/frontend-test

RUN chmod -R 755 /usr/share/frontend-test/dist
