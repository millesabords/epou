const router = require('express').Router();

var contactFormCtrl = require('mycontrollers/contactFormController.js');
//var contactFormCtrl = require('./controllers/contactFormController');

//main page (index)
router.get('/', (req, res) => {
  //res.status(200).json({ message: 'Connected!' });
  console.log('getting main page');
  //res.render('pages/index', {/*csrfToken: req.csrfToken(),*/ debugTimeUrl:process.env.BROWSER_REFRESH_URL});
  res.render('pages/index', {formProcessed:"false"});
});

//the rest lies within separate controllers, for modularity
router.post('/contactForm', contactFormCtrl);//.contactFormTreatment);

module.exports = router;
