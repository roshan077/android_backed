const mongoose = require("mongoose");

const cart = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Enter product name"],
        },
      
        price:{
            type: String,
            required: [true,"Enter price"],
        },
        product_id:{
            type: String,
            // required: [true,"Enter price"],
            // trim: true
        },
        quantity:{
            type: String,
            // required: [true,"Enter price"],
            // trim: true
        },
        // image: {
        //     type: String,
        //     default: "no-photo.jpg",
        //   },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);

module.exports = mongoose.model("cart", cart);
