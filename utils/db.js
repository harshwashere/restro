const mongoose = require("mongoose");



const connectDb = async () => {
  try {
    const link = await mongoose.connect(process.env.URI);
    if (link) {
      console.log("Connected Successfully");
    } else {
      console.log("Not Connected!!!!");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
