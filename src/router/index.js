const { Router } = require("express");
const handlersProduct = require("../handlers/productHandlers");
const handlersPurchase = require("../handlers/purchaseHandlers");
const handlersUser = require("../handlers/userHandlers");
const router = Router();

//Rutas para acceder a Productos
router.use("/products", handlersProduct);

//Rutas de Compras
router.use("/purchase", handlersPurchase);

//Rutas de User
router.use("/user", handlersUser);





module.exports = router;
