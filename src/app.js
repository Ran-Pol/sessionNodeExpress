const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

// Settings
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'wafadwwfgqw_Now',
    saveUninitialized: false,
    resave: false
}))
app.use(flash());

// Global variable
app.use((req, res, next) => {
    app.locals.message = req.flash('succes')
    next();
})



// Routes
app.use(require('./routes/index'));



// ServerPort
app.listen(3000, () => {
    console.log("Serving on port 3000")
})
