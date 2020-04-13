const express = require('express');
const router =  express.Router();

const basketController = require('../controllers/basketController');


router.get('/basket',basketController.getAll);

router.post('/basket',basketController.postOne);

module.exports = router;