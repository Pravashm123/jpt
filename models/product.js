var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Product = new Schema({
    model_id: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    piece:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
},
{
        timestamps: true
});

module.exports = mongoose.model('Product', Product);