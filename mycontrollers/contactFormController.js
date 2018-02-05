
const filename = "messages2421.txt";

/*module.exports = {
    getMovie : function(req, res){
       //do something
    },
    postMovie : function(req, res){
       //do something
    }
}
*/

const fs = require('fs');
/*const { check, validationResult} = require('express-validator/check');
const { matchedData, sanitize, checkbody } = require('express-validator/filter');
*/
const Joi = require('joi');

const userMailerSchema = Joi.object({
  _csrf: Joi.string().required(),
  mailerName: Joi.string().min(2).max(60).required(),
  mailerMail: Joi.string().email().min(5).max(50).required(),
  mailerMsg: Joi.string().min(1).max(5000).required(),
  address: Joi.string().length(7).required() 
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

  let fileSizeInMegabytes = 0.0;
  if (fs.existsSync(filename)) {
     const stats = fs.statSync(filename);
     fileSizeInMegabytes = stats.size / 1000000.0;
  }
  if (fileSizeInMegabytes < 4.0){
     let curDate = new Date().toString()/*.
        replace(/T/, ' ').  
        replace(/\..+/, '') */;
     fs.appendFile(filename,
	     '----------------------------------------\n' +
	     '\ndata appended on date: ' + curDate + '\n' + req.body.mailerName);
       console.log('The "data to append" was appended to file!');
  }
  }
//  res.json(200);
//res.send("Form submitted");  
/*
TODO this:
  */
	 res.render('pages/index', { formProcessed:"true" });
   }catch (e) {
    console.log(e.message, e.name); // on passe les caractéristiques de l'exception
                                  // à un gestionnaire d'erreur
 }
  
};

