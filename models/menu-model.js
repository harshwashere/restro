const mongoose = require("mongoose");

const menudata = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  value:{
    type:Number,
    required:true
  }
});

const Menu = new mongoose.model("menu", menudata);
module.exports = Menu
