const jwt = require('jsonwebtoken');
const config = require('../config/database');

exports.signToken = username => {
    return jwt.sign(username, config.secret, {
        expiresIn: config.expireTime
    })
};