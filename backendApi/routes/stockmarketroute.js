const express = require('express');
const { getAllStockMarket } = require('../controller/stockMarketCtrl');
const router = express.Router();

router.get('/', getAllStockMarket);


module.exports = router
