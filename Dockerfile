FROM node:16.15.1-alpine

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN yarn install && yarn cache clean --force

COPY . .

CMD ["node", "app.js"]