FROM node:7.1.0

RUN npm install mysql && npm install express

#COPY nodesrc/* /src/

EXPOSE 8080
