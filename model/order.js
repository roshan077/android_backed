const mongoose = require("mongoose");

const order = new mongoose.Schema(
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
        bname:{
            type: String
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

module.exports = mongoose.model("order", order);
