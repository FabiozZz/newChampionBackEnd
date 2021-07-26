FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install -g npm@7.20.1

RUN npm install

RUN chown -R node /app/node_modules

COPY . ./

CMD ["npm", "start"]