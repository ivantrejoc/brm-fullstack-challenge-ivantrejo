const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("RUTA DE PRODUCTS");
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

router.post("/", (req, res) => {
  try {
    res.status(200).json("RUTA DE CREAR UN PRODUCTS");
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
