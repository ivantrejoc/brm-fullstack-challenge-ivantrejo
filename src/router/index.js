const {Router} = require("express");   


const router = Router();       

//Rutas para acceder a Productos
router.get("/products", (req, res) =>{
    res.send("RUTA DE PRODUCTS")
});
router.get("/products/:id", (req, res) =>{
    res.send("RUTA DE PRODUCTS POR ID")
}); 
router.post("/products", (req, res) =>{
    res.send("RUTA DE CREAR UN PRODUCTS")
} ); 
router.put("products/:id", (req, res) =>{
    res.send("RUTA DE EDITAR PRODUCTS")
});
router.delete("/products/:id", (req, res) =>{
    res.send("RUTA DE BORRAR UN PRODUCTS")
});

//Rutas para acceder al login de usuarios
router.get("/login");
router.post("/login");
           
             
     
 
module.exports = router;