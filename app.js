const express = require("express");
const { registerController, registerpost } = require("./controller/registerController");
const { loginController, loginPost } = require("./controller/loginController");
const { updateController, updatePost } = require("./controller/updateController");
const { tableController, tablePost } = require("./controller/tableController");
const app = express();
app.set("view engine","ejs");
require("./model");
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/register",registerController);
app.post("/registerData",registerpost);
app.get("/login",loginController);
app.post("/loginData",loginPost);
app.get("/update/:id",updateController);
app.post("/updateData/:id",updatePost);
app.get("/table",tableController);
app.post("/tableData/:id",tablePost);




const port=3000;
app.listen(port,(req,res)=>{
      console.log("The project has started at port",port)
});