FROM node:latest
ARG JSPM_GITHUB_AUTH_TOKEN
RUN mkdir /usr/share/frontend-test
ADD . /usr/share/frontend-test
WORKDIR /usr/share/frontend-test

RUN npm install --no-optional
RUN npm run build
RUN chmod -R 755 /usr/share/frontend-test/dist
