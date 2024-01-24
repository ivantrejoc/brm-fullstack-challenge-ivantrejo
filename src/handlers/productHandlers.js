const { Router } = require("express");
const { createProduct, getProducts } = require("../controllers/productsControllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    res.status(200).json("RUTA DE PRODUCTS POR ID");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { batch, productName, price, stock } = req.body
  try {
    await createProduct(batch, productName, price, stock);
    res.status(201).json("PRODUCT CREATED SUCCESSFULLY");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    res.status(200).json("RUTA DE EDITAR PRODUCTS");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.status(200).json("RUTA PARA BORRAR PRODUCTS");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
