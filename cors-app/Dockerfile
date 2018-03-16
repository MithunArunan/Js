FROM node:latest

WORKDIR /home/app

COPY package.json /home/app

RUN ["npm", "install"]

COPY . /home/app/

EXPOSE 9999

CMD ["node","server.js"]
