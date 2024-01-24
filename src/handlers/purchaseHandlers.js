const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("OBTENER TODAS LAS PURCHASE");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
    try {
      res.status(200).json("CREAR NUEVA PURCHASE");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      res.status(200).json("EDITAR PURCHASE");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;