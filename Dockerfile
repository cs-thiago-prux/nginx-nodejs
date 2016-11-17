FROM node:7.1.0

RUN mkdir /src

RUN npm install mysql && npm install express && npm install http

WORKDIR /src
#RUN npm install


EXPOSE 3000

CMD ["node", "app.js"]
