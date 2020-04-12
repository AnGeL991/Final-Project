const mongoose = require("mongoose");

const machinProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  weight: { type: String, required: true },
  availability: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: false },
});

module.exports = mongoose.model('machinproduct',machinProductSchema);