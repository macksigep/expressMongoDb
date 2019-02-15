const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/test');

app.set('port', process.env.port || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'TKRLKAJFLJEJIFJ98T98ALDJFIJGOR09JH<<,MX',
    resave: true, 
    saveUninitialized: true
}));

app.use(flash());
app.use(routes);

app.listen(app.get('port'), function() {
    console.log('Server start on port ', app.get('port'));
})