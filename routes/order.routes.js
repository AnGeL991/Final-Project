const express = require('express');
const router = express.Router();

const orderProductController = require('../controllers/orderController');

router.get('/order',orderProductController.getAll);

router.post('/order',orderProductController.postOne);

module.exports = router;