//DECLARATION
var express  		= require('express');
var login 			= require('./controllers/login');
var user 			= require('./controllers/user');
var home 			= require('./controllers/home');
var admin 			= require('./controllers/admin');
var comm 			= require('./controllers/comment');
var reg 			= require('./controllers/reg');
var logout 			= require('./controllers/logout');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var app 			= express();


//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/home', home);
app.use('/user', user);
app.use('/admin', admin);
app.use('/registration', reg);
app.use('/comment', comm);
app.use('/logout', logout);
app.use('/assets', express.static('ext'))
app.use('/assets2', express.static('views/home'))
app.use('/images', express.static('public'))
//ROUTES
app.get('/', (req, res)=> res.render('home/index'));


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});

app.get('/setCookie', (req, res)=>{
	res.cookie('cookie1', 'this is my first cookie');
	res.send('done!');
});

app.get('/viewCookie', (req, res)=>{
	//console.log(res.cookie['cookie1']);
	res.send(req.cookies['cookie1']);
});

app.get('/rmCookie', (req, res)=>{
	res.clearCookie('cookie1');
	res.send('removed!');
});
