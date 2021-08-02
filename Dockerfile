FROM node:16-alpine3.11

# RUN mkdir app

WORKDIR /app

COPY package.json /app/

RUN npm install -g yarn
RUN npm install -g react-scripts@latest

RUN yarn

RUN chown -R node /app/node_modules

EXPOSE 3000

CMD ["npm", "start"]
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front