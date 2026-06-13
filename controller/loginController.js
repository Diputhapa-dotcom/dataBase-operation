const { where } = require("sequelize");
const { logins, registers } = require("../model");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

exports.loginController=(req,res)=>{
 res.render("login.ejs")
}
exports.loginPost = async (req,res)=>{
    const {email,password}=req.body;
  const isEmail= await registers.findOne({
        where:{
            email:email,
        }
        
        
    })
   
    if(isEmail){
        const isPassword =  bcrypt.compareSync(password,isEmail.password)
        if(isPassword){
    //generate token
         var token=jwt.sign({id:isEmail.id},"secretkeydontshare",{
            expiresIn:'1d'

         });
         res.cookie("token",token);
         res.send("successful")


        }
        else{
            res.send("invalid password");
        }
     

    } else{
        res.send("please enter valid email and password");
    }
    
};