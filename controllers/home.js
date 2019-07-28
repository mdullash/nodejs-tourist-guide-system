var express = require('express');
var userModel = require.main.require('./model/user-model');
var regModel = require.main.require('./model/reg-model');
var commentModel = require.main.require('./model/comment-model');
var router = express.Router();


//ROUTES
router.get('/', function(req, res){
	
		res.render('home/index');
});
// router.get('/index', function(req, res){
// 	res.render('home/index');
// });
router.get('/registration', function(req, res){
	res.render('home/registration');
});
router.get('/login', function(req, res){
	res.render('home/login');
});
router.get('/comment', function(req, res){
	res.render('home/comment');
});
router.get('/about', function(req, res){
	res.render('home/about');
});
router.get('/contact', function(req, res){
	res.render('home/contact');
});

router.get('/forget', function(req, res){
	res.render('home/forget');
});
router.get('/planner', function(req, res){
	res.render('home/planner');
});
router.get('/barisal', function(req, res){
	res.render('home/barisal');
});
router.get('/sundorban', function(req, res){
	res.render('home/sundorban');
});
router.get('/coxbazar', function(req, res){
	res.render('home/coxbazar');
});
router.get('/bandorbon', function(req, res){
	res.render('home/bandorbon');
});
router.get('/kuakata', function(req, res){
	res.render('home/kuakata');
});
router.get('/sajek', function(req, res){
	res.render('home/sajek');
});



/*router.get('/', function(req, res){
	
	userModel.getAll(function(results){
		var data = {
			name: req.session.un,
			uList: results
		};
		res.render('home/index', data);
	});
});



router.get('/profile', function(req, res){

	userModel.get(req.session.uid, function(result){

		if(result != ""){
			res.render('home/profile', result);
		}else{
			res.redirect('/home');
		}
	});
});

router.get('/adduser', function(req, res){
	res.render('home/adduser');
});


router.post("/adduser", function(req, res){

	var user = {
		uname: req.body.uname,
		password: req.body.password,
		type: req.body.type
	};

	userModel.insert(user, function(status){

		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home/adduser');
		}
	});
});

router.get('/edit/:id', function(req, res){

	userModel.get(req.params.id, function(result){

		if(result != ""){
			res.render('home/edit', result);
		}else{
			res.redirect('/home/userlist');
		}
	});
});

router.post("/edit/:id", function(req, res){

	var user = {
		id: req.params.id,
		uname: req.body.uname,
		password: req.body.password,
		type: req.body.type
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home/edit:'+req.params.id);
		}
	});
});

router.get('/delete/:id', function(req, res){

	userModel.get(req.params.id, function(result){

		if(result != ""){
			res.render('home/delete', result);
		}else{
			res.redirect('/home/userlist');
		}
	});
});

router.post("/delete/:id", function(req, res){

	var user = {
		id: req.params.id,
		uname: req.body.uname,
		password: req.body.password,
		type: req.body.type
	};

	userModel.delete(user, function(status){

		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home/delete:'+req.params.id);
		}
	});
});
*/
module.exports = router;






