const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({ name: "samsung" });
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).sort("-price");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
