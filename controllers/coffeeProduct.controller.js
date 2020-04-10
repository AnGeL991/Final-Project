const CoffeeProduct = require("../models/coffeeProduct.model");

exports.getAll = async(req,res) => {
    try {
        const coffeeProducts = await CoffeeProduct.find();
        console.log(coffeeProducts)
         res.json(await CoffeeProduct.find());
    }catch (err) {
        res.status(500).json(err);
    }
}
exports.postOne = async (req,res) => {
    try {
        const {
            id,title,image,type,composition,weight,availability,price
        } = req.body;
        const newProduct = new CoffeeProduct({
            id,title,image,type,composition,weight,availability,price
        });
        await newProduct.save();
        res.json({
            message: 'ok'
        });
    } catch (err) {
        res.status(500).json(err);
    }
}