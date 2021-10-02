const express = require("express");
const  router = express.Router();

const {
  createorder,
  getorder, 
  deleteorder,
  } = require("../controllers/order")

  const { protect } = require("../middleware/auth");

  router
  .route("/")
  .get(protect,getorder)
  .post(protect,createorder);


  router
  .route("/:id")
  .delete(protect, deleteorder);


  module.exports = router