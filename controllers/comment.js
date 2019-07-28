var express = require('express');
var commentModel = require.main.require('./model/comment-model');
var router = express.Router();


//ROUTES
/*router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/home');
	}
});*/

router.get('/comment', function(req, res){
	res.render('admin/usercomment');
});
router.get('/comment', function(req, res){
	
	commentModel.getAll(function(results){
		var data = {
			name: req.session.un,
			uList: results
		};
		res.render('admin/usercomment', data);
	});
});



router.get('/', function(req, res){
	res.render('home/comment');
});


router.post("/", function(req, res){

var user = {
		email: req.body.uemail,
		comment: req.body.comment
	};

	commentModel.insert(user, function(status){

		if(status){
			res.redirect('/home');
		}else{
			res.redirect('/comment');
		}
	});
});




module.exports = router;






