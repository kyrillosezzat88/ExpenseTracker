const mongoose = require('mongoose');


const TransctionScehma = new mongoose.Schema({
    Text:{
        type:String,
        trim:true,
        required:[true , 'Please Add Some Text']
    },
    Amount:{
        type:Number,
        required:[true , 'Please Add some Amount']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction' , TransctionScehma);