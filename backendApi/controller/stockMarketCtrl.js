
const asyncHandler = require("express-async-handler");



const getAllStockMarket = asyncHandler(async (req, res) => {
    // console.log(req.query)
  
    try {
      // filtering products
      const queryObj = { ...req.query };
      const excludeFields = ["page", "sort", "limit", "fields"];
      excludeFields.forEach((el) => delete queryObj[el]);
      // console.log(queryObj, req.query)
      // console.log(queryObj)
  
      // handle price range sortings
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      // console.log(JSON.parse(queryStr));
      let query = Product.find(JSON.parse(queryStr));
  
      // sorting
      if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
      } else {
        query = query.sort("-createdAt");
      }
  
      // limiting the fields
      if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
      } else {
        query = query.select("-__v");
      }
  
      // pagination
  
      const page = req.query.page;
      const limit = req.query.limit;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
  
      if (req.query.page) {
        const productCount = await Product.countDocuments();
        if (skip >= productCount)
          res.json({
            message: "Page does not exist",
          });
        // if(skip >= productCount) throw new Error("This page does not exist")
      }
      // console.log(page, limit, skip)
  
      const product = await query;
      // const getallProducts = await Product.find(queryObj) // passing req.query allows me to sort product base of the value specified
      // res.json(getallProducts );
      res.json(product);
    } catch (err) {
      throw new Error(err);
    }
  });




  module.exports ={
    getAllStockMarket
  }