const router = require('express').Router(),
    controller = require('./controller'),
    passport = require('passport');

var platform = process.platform;

if (platform == 'win32') {
    router.post('/signin', controller.signinWin32);
}
else {
    router.post('/signin', controller.singin);
}

router.post('/register', controller.register);

router.get('/profile', passport.authenticate('jwt', {session:false}), controller.profile);

module.exports = router;