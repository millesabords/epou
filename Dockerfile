FROM node:carbon
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
EXPOSE 5050
CMD ["npm", "start"]
