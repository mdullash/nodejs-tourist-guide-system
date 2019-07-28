var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('/', function(req, res){
	res.render('home/login');
});

router.post('/', function(req, res){
			
		var user = {
			uname: req.body.email,
			password: req.body.pass
		};

		userModel.validate(user, function(result){
			if(result != ""){
				req.session.un = req.body.email;
				req.session.uid = result.id;
				if(result.type=="admin"){
				res.redirect('/admin');
			}
			if(result.type=="user")
			{
				res.redirect('/user');
			}
		}
			else{
				res.redirect('/login');
			}		
		});
		//console.log(results);
});

module.exports = router;






