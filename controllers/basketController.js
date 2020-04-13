const basket = require("../models/basket.model");

exports.getAll = async (req, res) => {
  try {
    const baskets = await basket.find();
    console.log(baskets);
    res.json(await basket.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.postOne = async (req,res) => {
  try {
      const {
         title,image,price
      } = req.body;
      const newBrands = new basket({
        title,image,price
      });
      await newBrands.save();
      res.json({
          message: 'ok'
      });
  } catch (err) {
      res.status(500).json(err);
  }
}
