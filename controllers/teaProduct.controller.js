const TeaProduct = require("../models/teaProduct.model");

exports.getAll = async(req,res) => {
    try {
        const TeaProducts = await TeaProduct.find();
        console.log(TeaProducts)
         res.json(await TeaProduct.find());
    }catch (err) {
        res.status(500).json(err);
    }
}
exports.postOne = async (req,res) => {
    try {
        const {
            id,title,image,type,composition,weight,availability,price
        } = req.body;
        const newProduct = new TeaProduct({
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