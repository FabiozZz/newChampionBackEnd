# Возьмите базовый образ

FROM node:16-alpine

# задайте рабочую директорию

WORKDIR /app

# добавьте `/app/node_modules/.bin` в $PATH

ENV PATH /app/node_modules/.bin:$PATH

# установите зависимости приложения

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install react-scripts@3.4.1 -g

 

# добавьте приложение

COPY . ./

 

# запустите приложение

CMD ["npm", "start"]