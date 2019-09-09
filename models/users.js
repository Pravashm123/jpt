var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
        email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
},
{
        timestamps: true
});


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);