FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY views ./views
COPY app.js ./
COPY myroutes ./myroutes
COPY mycontrollers ./mycontrollers
COPY public ./public
RUN npm install --only=production
EXPOSE 5050
CMD ["npm", "start"]
