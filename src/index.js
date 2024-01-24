const express = require("express");
const router = require("./router/index");
const server = express();
const PORT = 3001;
const morgan = require("morgan");
// const { conn } = require('./DB_connection');    // conexión a DB


server.use(morgan("dev"));

server.get("/", (req, res) =>{
   res.send("this is the server")
})

server.use((req, res, next) => {                             //middlewares, propuestos por el readme
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');    // siempre van antes de server.listen
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());     //middleware que convierte todo el json a objeto
server.use("/ivan-trejo-challenge", router); //middleware

server.listen(PORT, ()=>{
      console.log("Server raised at port: "+ PORT);
      })


// conn.sync                             // se asegura de que la base de datos este sincronizada antes
// ({force: false})                       // de levantar el server
// .then((result) => {
//   server.listen(PORT, ()=>{
//     console.log("Server raised at port: "+ PORT);
//     })      
// }).catch((err) => console.log(err));
