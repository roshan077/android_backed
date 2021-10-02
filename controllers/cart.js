const ErrorResponse = require("../utils/errorResponse");
const Cart = require("../model/cart");
const asyncHandler = require("../middleware/async");
//To get the file name extension line .jpg,.png
const path = require("path");


//--------------------CREATE Student------------------

exports.createcart = asyncHandler(async (req, res, next) => {

  const productnew = {
    name : req.body.name,
    quantity : req.body.quantity,
    price : req.body.price,
    product_id : req.body.product_id,
    // image : req.body.  image,
  }
  //const student = await Student.create(req.body);
  const cart = await Cart.create(productnew);

  if (!cart) {
    return next(new ErrorResponse("Error adding product"), 404);
  }

  res.status(201).json({
    success: true,
    data: cart,
  });
});

//-------------------Display all students

exports.getcart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.find({});
  
    res.status(201).json({
      success: true,
      count: cart.length,
      data: cart,
    });
  });



  // -----------------DELETE STUDENT------------------------

exports.deletecart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findById(req.params.id);
  
    if (!cart) {
      return next(new ErrorResponse(`No product found `), 404);
    }
  
    await cart.remove();
  
    res.status(200).json({
      success: true,
      count: product.length,
      data: {},
    });
  });