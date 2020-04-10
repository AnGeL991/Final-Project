const BrandProduct = require("../models/brand.model");

exports.getAll = async (req, res) => {
  try {
    const brands = await BrandProduct.find();
    console.log(brands);
    res.json(await BrandProduct.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.postOne = async (req,res) => {
  try {
      const {
         img,title,description
      } = req.body;
      const newBrands = new BrandProduct({
        img,title,description
      });
      await newBrands.save();
      res.json({
          message: 'ok'
      });
  } catch (err) {
      res.status(500).json(err);
  }
}
