const express = require('express')
const mainController = require('../controllers/mainController')
const router = express.Router()

router.get('/', mainController.home);
router.get('/producto/:productoId', mainController.producto);
router.get('/productcart', mainController.cart);

module.exports = router;