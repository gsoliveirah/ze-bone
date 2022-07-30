const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');

router.get('/', carrinhoController.carrinho);
router.get('/checkout', checkoutController.checkout);

module.exports = router;