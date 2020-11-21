FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

ENV PATH src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

COPY . /src/app

RUN npm install

CMD ["npm", "run", "deploy"]