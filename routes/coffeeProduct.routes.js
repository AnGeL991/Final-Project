const express = require('express');
const router = express.Router();


const coffeeProductController = require('../controllers/coffeeProduct.controller');

router.get('/coffeeProduct',coffeeProductController.getAll);

router.post('/coffeeProduct',coffeeProductController.postOne);




module.exports = router;