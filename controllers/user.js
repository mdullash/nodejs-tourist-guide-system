var express = require('express');

var router = express.Router();


//ROUTES
router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/user');
	}
});

router.get('/', function(req, res){
	
	userloginModel.getAll(function(results){
		var data = {
			name: req.session.un,
			uList: results
		};
		res.render('user/index', data);
	});
});
router.get('/profile', function(req, res){

	userloginModel.get(req.session.uid, function(result){

		if(result != ""){
			res.render('user/profile', result);
		}else{
			res.redirect('/user');
		}
	});
});



module.exports = router;






