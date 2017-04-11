const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        State = require('./state');

//console.log(State);
const OrderSchema = new Schema({
    product : { type: String, require: true, trim: true },
    price: { type: Number},
    quantity: { type: Number}
});

const CustomerScheme = new Schema({
    firstName : { type: String, require: true, trim: true },
    lastName : { type: String, require: true, trim: true },
    email : { type: String, require: true, trim: true },
    address : { type: String, require: true, trim: true },
    city : { type: String, require: true, trim: true },
    stateId : { type: Number, require: true },
    state : State.schema,
    postal : { type: String },
    gender : { type: String },
    orderCount : { type: Number },
    orders : [OrderSchema],
});

module.exports = mongoose.model('Customer', CustomerScheme, 'customers');