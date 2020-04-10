const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    img: {type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},

})

module.exports = mongoose.model('brand',brandSchema);