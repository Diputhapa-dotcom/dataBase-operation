const { registers } = require("../model");
const bcrypt=require("bcrypt")
require("dotenv").config()

exports.registerController=(req,res)=>{
    res.render("register.ejs");

}

exports.registerpost = async (req,res)=>{
  console.log(req.file)
  console.log(process.env.name)
  const {username,email,password,image}=req.body;
      await registers.create({
        username:username,
        email:email,
        password: bcrypt.hashSync(password,10),
        image: process.env.serverUrl + req.file.filename
      });

   res.redirect("/blog");
}