var express = require('express');
var userModel = require.main.require('./model/user-model');
var commentModel = require.main.require('./model/comment-model');
var router = express.Router();


//ROUTES
router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/admin');
	}
});

router.get('/', function(req, res){
	
	userModel.getAll(function(results){
		var data = {
			name: req.session.un,
			uList: results
		};
		res.render('admin/index', data);
	});
});
router.get('/profile', function(req, res){

	userModel.get(req.session.uid, function(result){

		if(result != ""){
			res.render('admin/profile', result);
		}else{
			res.redirect('/admin');
		}
	});
});
router.get('/userlist', function(req, res){

	userModel.getAll(function(results){
	
		var data = {
			name: req.session.un,
			uList: results
		};
		res.render('admin/userlist', data);
	});
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


router.get('/adduser', function(req, res){
	res.render('home/registration');
});

router.post("/adduser", function(req, res){

	var user = {
		fname: req.body.fname,
		mobile: req.body.mobile,
		email: req.body.email,
		pass: req.body.pass
	};

	userModel.insert(user, function(status){

		if(status){
			res.redirect('/admin/userlist');
		}else{
			res.redirect('/admin/adduser');
		}
	});
});
router.get('/route', function(req, res){
	res.render('admin/route');
});

router.get('/edit/:id', function(req, res){

	userModel.get(req.params.id, function(result){

		if(result != ""){
			res.render('admin/edit', result);
		}else{
			res.redirect('/admin/userlist');
		}
	});
});

router.post("/edit/:id", function(req, res){

	var user = {
		id: req.params.id,
		pname: req.body.pname,
		uname: req.body.uname,
		password: req.body.password
		
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/admin/userlist');
		}else{
			res.redirect('/admin/edit:'+req.params.id);
		}
	});
});

router.get('/delete/:id', function(req, res){

	userModel.get(req.params.id, function(result){

		if(result != ""){
			res.render('admin/delete', result);
		}else{
			res.redirect('/admin/userlist');
		}
	});
});

router.post("/delete/:id", function(req, res){

	var user = {
		id: req.params.id,
		pname: req.body.pname,
		uname: req.body.uname,
		password: req.body.password
		
	};

	userModel.delete(user, function(status){

		if(status){
			res.redirect('/admin/userlist');
		}else{
			res.redirect('/admin/delete:'+req.params.id);
		}
	});
});

module.exports = router;






