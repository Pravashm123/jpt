var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Category = new Schema({
        name: {
        type: String,
        required: true
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' 
    }]
},
{
        timestamps: true
});

module.exports = mongoose.model('Category', Category);