const mongoose = require('mongoose');


const orderProductSchema = new mongoose.Schema({
    name:{type:String,required:true},
    surname: {type:String,required:true},
    email: {type:String,required:true},
    addresStreet:{type:String},
    addressCity:{type:String},
    addressPostCode:{type:String},
});

module.exports = mongoose.model('order',orderProductSchema);