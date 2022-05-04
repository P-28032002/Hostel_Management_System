var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');
var stundentRouter = require('./routes/student-form-route');
var hostelOwnerRouter = require('./routes/hostel-owner-route');
var searchResult = require('./routes/search');
var aboutPage = require('./routes/about-route');
var contactUsPage = require('./routes/contactus-route');
var mumbaiPage = require('./routes/mumbai-route');
var punePage = require('./routes/pune-route');
var banglorePage = require('./routes/banglore-route');
var delhiPage = require('./routes/delhi-route');
var hyderabadPage = require('./routes/hyderabad-route');
var chennaiPage = require('./routes/chennai-route');
var contactPage = require('./routes/contact');
var dashboardhostelowner = require('./routes/dasboard-route-hostel-owner');
var reserveHostel = require('./routes/reserve');
var applicationPage = require('./routes/applications');
var thankyouPage = require('./routes/thankyou');
var paymentPage = require('./routes/payment');
var appliedHostel = require('./routes/applied_hostels');
var profilePage = require('./routes/profile-route');
var paymentReceivedPage = require('./routes/payment-received-route')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(7000)
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);
app.use('/', stundentRouter);
app.use('/', hostelOwnerRouter);
app.use('/',searchResult);
app.use('/',aboutPage);
app.use('/',contactUsPage);
app.use('/',mumbaiPage);
app.use('/',punePage);
app.use('/',banglorePage);
app.use('/',delhiPage);
app.use('/',hyderabadPage);
app.use('/',chennaiPage);
app.use('/',contactPage);
app.use('/',dashboardhostelowner);
app.use('/',reserveHostel);
app.use('/',applicationPage);
app.use('/',thankyouPage);
app.use('/',paymentPage);
app.use('/',appliedHostel);
app.use('/',profilePage);
app.use('/',paymentReceivedPage)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
