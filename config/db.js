const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  console.log("MONGO_URI = " + process.env.MONGO_URI);
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
