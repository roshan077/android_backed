const express = require("express");
const  router = express.Router();

const {
  createProduct,
  getproduct, 
  getproductById,
  deleteproduct,
  productPhotoUpload,
  } = require("../controllers/product");

  const { protect } = require("../middleware/auth");

  router
  .route("/")
  .get(protect,getproduct)
  .post(protect,createProduct);

  router
  .route("/:id/photo")
  .put(protect, productPhotoUpload);

  router
  .route("/:id")
  .get(protect,getproductById)
  .delete(protect, deleteproduct);


  module.exports = router