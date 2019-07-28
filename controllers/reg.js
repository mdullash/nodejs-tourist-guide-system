var express = require('express');
var regModel = require.main.require('./model/reg-model');
var router = express.Router();


//ROUTES




router.get('/', function(req, res){
	res.render('home/registration');
});


router.post("/", function(req, res){

	var user = {
		fname:req.body.fname,
		mobile:req.body.mobile,
		email: req.body.email,
		pass:req.body.pass
		
	};

	regModel.insert(user, function(status){

		if(status){
			res.redirect('/login');
		}else{
			res.redirect('/registration');
		}
	});
});



module.exports = router;






