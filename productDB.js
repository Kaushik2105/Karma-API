const connectDB = require("./Database/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
