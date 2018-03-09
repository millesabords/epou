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
