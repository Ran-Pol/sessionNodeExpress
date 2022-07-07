const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('index')
})


router.post('/register', (req, res) => {
    // Using Session to pass data between pages/routes
    // req.session.userData = req.body;

    // Using the Flash module to send data between routes
    // req.flash('user', req.body);

    // We can send data between pages with Flash
    // However, Flash is mostly use to send messages/alerts
    req.flash('succes', "Now you are registered!");

    res.redirect('/product')
})

router.get('/profile', (req, res) => {
    // Using Session to pass data between pages/routes
    // const user = req.session.userData;
    // delete req.session.userData;

    // Using the Flash module to send data between routes
    // const user = req.flash('user')[0];
    // console.log(user);

    res.render('profile')
})

router.get('/product', (req, res) => {
    res.render('product')
})

module.exports = router;