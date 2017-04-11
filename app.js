const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//mongoose
mongoose.connect(config.database);
//on connection
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log('connect to database' + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
    console.log('Database error:' + err);
})

const app = express();
// const users = require('./routes/users');

//App port number
const port = process.env.PORT || 3333;
//enable cors
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyPaser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', require('./auth/routes'));
app.use('/api', require('./api'));
app.use('/tweets', require('./routes/tweet'));

//index route
app.get('/', (req, res) => {
    res.send('invalid endpoint');
})

//starts server
app.listen(port, () => {
    console.log('server start at port ' + port);
});
