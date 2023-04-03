const express = require('express');
const upload = require('../libs/storage');
const { getAll, create } = require('../controllers/products');

const router = express.Router();

router.get('/products', getAll);
router.post('/products', upload.single('image'), create);

module.exports = router;
