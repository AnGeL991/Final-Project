const express = require('express');
const router =  express.Router();

const BrandController = require('../controllers/brandController');


router.get('/brandProduct',BrandController.getAll);

router.post('/brandProduct',BrandController.postOne);

module.exports = router;