const OrderProduct = require("../models/order.model");


exports.getAll = async(req,res) => {
    try {
        const OrderProducts = await OrderProduct.find();
        console.log(OrderProducts)
        res.json(await OrderProduct.find());
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.postOne = async (req, res) => {
    try {
        const {
            name,surname,email,addresStreet,addressCity,addressPostCode,
        } = req.body;
        const newOrder = new OrderProduct({
            name,surname,email,addresStreet,addressCity,addressPostCode,
        });
        await newOrder.save();
        res.json({
            message: 'ok'
        });
    } catch (err) {
        res.status(500).json(err);
    }
}