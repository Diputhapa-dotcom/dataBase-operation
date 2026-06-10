const express = require("express");
const { registerController, registerpost } = require("./controller/registerController");
const { loginController, loginPost } = require("./controller/loginController");
const app = express();
app.set("view engine","ejs");
require("./model");
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/register",registerController);
app.get("/login",loginController)
app.post("/registerData",registerpost);
app.post("/loginData",loginPost);







const port=3000;
app.listen(port,(req,res)=>{
      console.log("The project has started at port",port)
});