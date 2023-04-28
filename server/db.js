require('dotenv').config()
const mongoose = require("mongoose");

const connectToMongo = async () => {
  const URL =process.env.DATABASE;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log(`Error while connecting to database `, error.message);
  }
};
module.exports = connectToMongo;
