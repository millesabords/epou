var express = require('express');
const app = express();
bodyParser = require('body-parser');
//console.log("nodeenv = " + process.env.NODE_ENV);

const routes = require('myroutes/mainPage.js');

const expressValidator = require('express-validator');
//app.use(expressValidator(middlewareOptions));
app.use(expressValidator());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// non-get requests protections (form...)
/*
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
app.use(session({
  secret: 'My super session secret',
  cookie: {
    httpOnly: true,
    secure: true
  }
}));
app.use(csrf());
app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});
*/

//html headers, iframes embeds, sessions and other protections
var helmet = require('helmet');
app.use(helmet({
  frameguard: {action: 'deny'}
}));
/*
app.use(cookieParser());
app.use(session({
  secret: 'My super session secret',
  cookie: {  httpOnly: true,  secure: true  }
}));
*/

//ddos protection
var RateLimit = require('express-rate-limit');
//app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc) 
var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes 
  max: 100, // limit each IP to 100 requests per windowMs 
  //max: 50, // limit each IP to 100 requests per windowMs 
  delayMs: 0 // disable delaying - full speed until the max limit is reached 
});
//  apply to all requests 
////////////////////////////////////////////app.use(limiter);


//normal stuffs...
app.set('port', (process.env.PORT || 5050));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//and finally
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  if (process.send) {
     process.send('online');
  }
});
app.use('/', routes);

