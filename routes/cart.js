const express = require("express");
const  router = express.Router();

const {
  createcart,
  getcart, 
  deletecart,
  } = require("../controllers/cart")

  const { protect } = require("../middleware/auth");

  router
  .route("/")
  .get(protect,getcart)
  .post(protect,createcart);


  router
  .route("/:id")
  .delete(protect, deletecart);


  module.exports = router