#FROM node:12.7-alpine AS build
FROM node:carbon
#FROM node:alpine
#FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
COPY views ./views
COPY app.js ./
COPY myroutes ./myroutes
COPY mycontrollers ./mycontrollers
COPY public ./public
VOLUME ["/usr/src/app/contacts"]
RUN npm install --only=production
#RUN useradd -d /home/myappuser -m -s /bin/bash myappuser
#USER myappuser
#EXPOSE 5050     should be published instead
CMD ["npm", "start"]
