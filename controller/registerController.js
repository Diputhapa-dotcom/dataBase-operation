const { registers } = require("../model");
const bcrypt=require("bcrypt")

exports.registerController=(req,res)=>{
    res.render("register.ejs");

}

exports.registerpost = async (req,res)=>{
  const {username,email,password}=req.body;
      await registers.create({
        username:username,
        email:email,
        password: bcrypt.hashSync(password,10)
      });

    res.send("successful");
}