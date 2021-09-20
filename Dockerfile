FROM node:16.9.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

RUN npm run migration:generate -- HospitalMigrations



CMD ["npm", "run", "start:dev"]
