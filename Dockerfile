FROM node:16.9.1-alpine

ENV NODE_ENV="development"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]


CMD ["npm", "run", "start:dev"]
