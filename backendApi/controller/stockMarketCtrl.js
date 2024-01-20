
const asyncHandler = require("express-async-handler");



const getAllStockMarket = asyncHandler(async (req, res) => {

    try {
        const product = await query;
      res.json(product);
    } catch (err) {
      throw new Error(err);
    }
  });




  module.exports ={
    getAllStockMarket
  }