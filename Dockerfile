# Возьмите базовый образ

FROM node:16-alpine

# задайте рабочую директорию

WORKDIR /app

# добавьте `/app/node_modules/.bin` в $PATH

ENV PATH /app/node_modules/.bin:$PATH

# установите зависимости приложения

COPY package.json ./

RUN npm install -g yarn

RUN yarn


# добавьте приложение

COPY . ./


# запустите приложение

CMD ["yarn", "start"]