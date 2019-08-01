FROM node:10

RUN npm install -g nodemon

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install


EXPOSE 4000

CMD ["npm", "start"]