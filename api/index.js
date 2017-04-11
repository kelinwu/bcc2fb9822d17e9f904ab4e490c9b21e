const router = require('express').Router();
const passport = require('passport');

router.use('/documents', passport.authenticate('jwt', {session:false}), require('./document/routes'));
router.use('/customers', require('./customer/routes'));

module.exports = router;