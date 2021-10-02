const ErrorResponse = require("../utils/errorResponse");
const Order = require("../model/order");
const asyncHandler = require("../middleware/async");
//To get the file name extension line .jpg,.png
const path = require("path");


//--------------------CREATE Student------------------

exports.createorder = asyncHandler(async (req, res, next) => {

  const productnew = {
    name : req.body.name,
    quantity : req.body.quantity,
    price : req.body.price,
    product_id : req.body.product_id,
    // image : req.body.  image,
  }
  //const student = await Student.create(req.body);
  const order = await Order.create(productnew);

  if (!cart) {
    return next(new ErrorResponse("Error adding product"), 404);
  }

  res.status(201).json({
    success: true,
    data: cart,
  });
});

//-------------------Display all students

exports.getorder = asyncHandler(async (req, res, next) => {
    const cart = await Order.find({});
  
    res.status(201).json({
      success: true,
      count: cart.length,
      data: cart,
    });
  });



  // -----------------DELETE STUDENT------------------------

exports.deleteorder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
  
    if (!order) {
      return next(new ErrorResponse(`No product found `), 404);
    }
  
    await order.remove();
  
    res.status(200).json({
      success: true,
      count: product.length,
      data: {},
    });
  });