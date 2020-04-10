const express = require('express');
const router = express.Router();


const teaProductController = require('../controllers/teaProduct.controller');

router.get('/teaProduct',teaProductController.getAll);

router.post('/teaProduct',teaProductController.postOne);





module.exports = router;