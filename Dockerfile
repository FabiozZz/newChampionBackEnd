FROM node:16-alpine3.11

# RUN mkdir app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm config set unsafe-perm true

RUN npm install -g npm@7.19.1
RUN npm install -g react-scripts@4.0.3

RUN npm install --force

RUN chown -R node /app/node_modules

EXPOSE 3000

COPY . .

CMD ["npm", "start"]
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front
