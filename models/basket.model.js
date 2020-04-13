const mongoose = require("mongoose");

const basketSchema = new mongoose.Schema({
    title: {type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},

})

module.exports = mongoose.model('basket',basketSchema);