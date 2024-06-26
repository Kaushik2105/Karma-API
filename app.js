const express = require("express");
const connectDB = require("./Database/connect");
const env = require("dotenv");

const app = express();
env.config();
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Yes I'm connected on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
