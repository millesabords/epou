

my process for the charts 'amcharts': Do the following steps using views/pages/index.ejs file
- uncomment bodyonload at the beginning
- uncomment script myCharts inclusion at the end
- comment imgs in skillsSets div
- uncomment chartdivs classes in skillsSets div
- modify file public/myCharts.js at will,
- reload page in browser and save charts using any necessary means
- use inkscape to turn modified charts back into 3 images again


docker container run -d -p 5163:5050 -v dockershared01:/usr/src/app/contacts millesabords/pressitenode4

ls /var/lib/docker/volumes/...




 --deprecated--

- docker build --tag truc1 .
- docker container run -d -p 3001:3000 truc1
- netstat -plnt #to see the mess with open tcp ports
- docker-compose up

# mevn-stack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
#maybe need to cd node_modules and ln -s ../myroutes . and ln -s ../mymodels .

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

following tutorial at: https://www.djamware.com/post/5a1b779f80aca75eadc12d6e/mongo-express-vue-nodejs-mevn-stack-crud-web-application
- for routes folder, you may have to announce it to npm packaging system:
 -> $ cd routes; sudo npm link; cd ..; npm link routes; chown -R ouam:ouam /usr/lib/node_modules/routes; remove package-lock and add "routes":"*" in package.json dependancies section and redo npm install
- for mogoose: remove 'useMongoClient' directive in app.js
- for mongodb related stuff:
maybe modify mongo stuff: authentication, ssl, host/port: mongo --host 127.0.0.1:27017

start mongodb (server) first and then mongo (CLI client for init and tests...):
$ chmod g+w /var/lib/mongodb (before )
$ sudo passwd mongodb ... // change mongodb user password
$ sudo usermod -a -G mongodb ouam ...// add mongodb group to me
$ sudo chmod g+w /var/log/mongodb/mongodb.log
$ sudo chmod g+w /var/log/mongodb
check that dbpath points to '/var/lib/mongodb' in /etc/mongodb.conf file and then:
$ sudo service mongodb restart
$ mongo
use mven; //will create empty database 'mevn'
db.createUser({user: "mynewuser", pwd: "myuser123", roles: [ "readWrite", "dbAdmin" ] });
db.movie.insert({"name":"whatever"})

dockerization:
docker-compose up -d
curl -i localhost:3001
docker exec -it mongo bash
check in mongo if paths lead to existing host db "mven" with existing collections (use meven; show collections in mongo)
docker-compose rm -fv mongodb -> delete volume with db created (careful) or use docker system prune
issues maybe with paths, ports, auths...
db appears to be persistent (adter down and re up, users still there...)
build 2 images separately and create a new docker-compose.yml for production that doesn't build but uses created images
when everything rocks, test with json more correctly formatted data than: curl -X POST -H "Content-type: application/json" http://localhost:3000/data/into/db -d '[ { "a": 1 }, { "b": 2 }, { "c": 3 } ]'

setups:
$ ctags -R static/ src/ myroutes/ mymodels/ *.js --tag-relative=yes
gvim javascript live debugging: ":Codi"

route debugging: $ DEBUG=express:* node truc.js (or put it in package.json scripts directives)
To daemonize, install pm2 and do:
$ pm2 start app.js
$ pm2 startup
<copy/paste the line as asked>
$ pm2 save

Do not forget to add symbolic links for myroutes and controllers like so:
$cd node_modules && ln -s ../myroutes . #idem for controllers
<!-- not really good for production: todo separate debug and prod parts -->
<script src="<%=debugTimeUrl%>"></script>

get rid of script included as introspection in index template before deployment to production or use the following:
#var env = process.env.NODE_ENV || "development";
### Setting environment variable for bash shell
#export NODE_ENV=prodction
### Defined while starting the application
#NODE_ENV=production node app.js


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
