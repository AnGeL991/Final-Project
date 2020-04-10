const mongoose = require("mongoose");

const yerbaProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  composition: { type: String, required: true },
  weight: { type: String, required: true },
  availability: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: false },
});

module.exports = mongoose.model('yerbaproduct',yerbaProductSchema);