'use strict';

//var config = require('../config');
//var nodemailer = require('nodemailer');

const filename = "./public/messages2421.txt";
const fs = require('fs');

/*module.exports = {
    getMovie : function(req, res){
       //do something
    },
    postMovie : function(req, res){
       //do something
    }
}
*/

/*const { check, validationResult} = require('express-validator/check');
const { matchedData, sanitize, checkbody } = require('express-validator/filter');
*/
const Joi = require('joi');

/*
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'DH.clerc@gmail.com',
    pass: 'todo npm install nodemailer ip and test this'
  }
});
var localIpAddress = require("ip").address();
var mailOptions = {
  from: 'DH.clerc@gmail.com',
  to: 'fhc.develop@gmail.com',
  subject: 'Message through personnal website at ' + localIpAddress,
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/

const userMailerSchema = Joi.object({
  _csrf: Joi.string().required(),
  mailerName: Joi.string().min(2).max(60).required(),
  mailerMail: Joi.string().email().min(5).max(50).required(),
  mailerMsg: Joi.string().min(1).max(5000).required(),
});

module.exports = function(req, res){

  console.log('first controller');
/*
  var requiredFields = ['name', 'email'];
  var reply='';
  reply += "Your name is" + req.body.mailerName;
  reply += "Your E-mail id is" + req.body.email; 
  reply += "Your address is" + req.body.address;
  reply += "Your mobile number is" + req.body.mobilno;
  res.send(reply);
*/
 try {
  const ret = Joi.validate(req.body, userMailerSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
    //res.status(400).json(err);
  }
  else{
    console.log("schema properly validated.");

//var defaultTransport = nodemailer.createTransport('SMTP', {
//    host: 'smtp.gmail.com',
//    port: 465,
//    secure: true,
//  auth: {
//		          type: 'OAuth2',
//        clientId: '661757382258-orq63r3s9ho9i4u1eem5v0ia3rhva7gh.apps.googleusercontent.com',
//        clientSecret: 'yAXQRKTezycDsMg3J2GZ1C5R'
//        XOAuthToken: nodemailer.createXOAuthGenerator({
//            user: "DH.clerc@gmail.com",
//            token: "1/O_HgoO4h2uOUfpus0V--7mygICXrQQ0ZajB3ZH52KqM",
//            tokenSecret: "_mUBkIwNPnfQBUIWrJrpXJ0c"
//
//		  //    user: config.mailer.auth.user,
////    pass: config.mailer.auth.pass
//  }
//});
//
//defaultTransport.set('oauth2_provision_cb', (user, renew, callback) => {
//    let accessToken = userTokens[user];
//    if(!accessToken){
//        return callback(new Error('Unknown user'));
//    }else{
//        return callback(null, accessToken);
//    }
//});
//     var transport = defaultTransport;
//      transport.sendMail({
//        from: config.mailer.defaultFromAddress,
//        to: "franchoisclerc@gmail.com",
//        subject: "notification clercdev",
//        html: "ceci est un super test",
//        // generateTextFromHTML: true,
//         text: "ceci est un envoi test",
//			      auth: {
//        user: 'franchoisclerc@gmail.com'
//    }
//      }, function (err, responseStatus) {
//        if (err) 
//          console.log(err);
//		else
//		  console.log(responseStatus);
//	    }
//	  );
//	  


  let fileSizeInMegabytes = 0.0;
  if (fs.existsSync(filename)) {
     const stats = fs.statSync(filename);
     fileSizeInMegabytes = stats.size / 1000000.0;
  }
  if (fileSizeInMegabytes < 4.0){
     let curDate = new Date().toString()//.
        //replace(/T/, ' ').  
        //replace(/\..+/, '');
		fs.appendFile(filename,
	     '----------------------------------------\n' +
	     '\ndata appended on date: ' + curDate + '\n' + req.body.mailerName, (err)=> {if (err) throw err;});
       console.log('The "data to append" was appended to file: ' + filename);
  }
//  res.json(200);
//res.send("Form submitted");  
/*
TODO this:
  */
	 res.render('pages/index', { formProcessed:"true" });
  }
   }catch (e) {
    console.log(e.message, e.name); // on passe les caractéristiques de l'exception
                                  // à un gestionnaire d'erreur
 }
  
};

