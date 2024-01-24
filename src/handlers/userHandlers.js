const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("OBTENER TODOS LOS USERS");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
    try {
      res.status(200).json("OBTENER USER POR ID");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post("/", async (req, res) => {
    try {
      res.status(200).json("CREAR NUEVO USER");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      res.status(200).json("EDITAR USER");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      res.status(200).json("ELIMINAR USER");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


module.exports = router;