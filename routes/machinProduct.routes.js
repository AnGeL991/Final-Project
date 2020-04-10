const express = require('express');
const router = express.Router();


const machinProductController = require('../controllers/machinProduct.controller');

router.get('/machinProduct',machinProductController.getAll);

router.post('/machinProduct',machinProductController.postOne);





module.exports = router;