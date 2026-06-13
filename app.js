const express = require("express");
const { registerController, registerpost } = require("./controller/registerController");
const { loginController, loginPost } = require("./controller/loginController");
const { updateController, updatePost } = require("./controller/updateController");
const { tableController, tablePost } = require("./controller/tableController");
const { storage, multer } = require("./middleware/storageConfig");
const { blogController } = require("./controller/blogController");
const app = express();
app.set("view engine","ejs");
require("./model");
// require("dotenv").config();
const uploads=multer({storage:storage});
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/register",registerController);
app.post("/registerData",uploads.single("image"),registerpost);
app.get("/login",loginController);
app.post("/loginData",loginPost);
app.get("/update/:id",updateController);
app.post("/updateData/:id",updatePost);
app.get("/table",tableController);
app.post("/tableData/:id",tablePost);
app.get("/blog",blogController);


app.use(express.static("./css/"));
app.use(express.static("./uploads/"));


const port=3000;
app.listen(port,(req,res)=>{
      console.log("The project has started at port",port)
});