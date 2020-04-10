const express = require('express');
const router = express.Router();


const yerbaProductController = require('../controllers/yerbaProduct.controller');

router.get('/yerbaProduct',yerbaProductController.getAll);

router.post('/yerbaProduct',yerbaProductController.postOne);





module.exports = router;