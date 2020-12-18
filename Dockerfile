FROM node:13.12.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 3003

CMD ["npm", "run", "deploy"]