FROM node:16-buster

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN rm -rf node_modules && yarn install

COPY . /app

EXPOSE 5002

CMD ["yarn", "start"]