const { Product } = require("../DB_connection");

const createProduct = async (batch, productName, price, stock) => {
  try {
    const newProduct = await Product.create({
      batch,
      productName,
      price,
      stock
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getProducts = async () => {
  try {
    const products = await Product.findAll();
    console.log("ESTOS SON LOS PRODUCTS", products);
    return products;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  createProduct,
  getProducts
};
