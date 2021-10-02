const mongoose = require("mongoose");

const product = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Enter product name"],
            trim: true
        },
        dec:{
            type: String,
            required: [true,"Enter Dec"],
        },
        price:{
            type: String,
            required: [true,"Enter price"],
            trim: true
        },
        category:{
            type: String,
            required: [true,"Enter category"],
            trim: true
        },
        image: {
            type: String,
            default: "no-photo.jpg",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);

module.exports = mongoose.model("product", product);
