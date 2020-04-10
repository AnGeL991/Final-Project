const MachinProduct = require("../models/machinProduct.model");

exports.getAll = async(req,res) => {
    try {
        const MachinProducts = await MachinProduct.find();
        console.log(MachinProducts)
         res.json(await MachinProduct.find());
    }catch (err) {
        res.status(500).json(err);
    }
}
exports.postOne = async (req,res) => {
    try {
        const {
            id,title,image,type,composition,weight,availability,price
        } = req.body;
        const newProduct = new MachinProduct({
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