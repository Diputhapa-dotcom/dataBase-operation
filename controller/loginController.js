const { where } = require("sequelize");
const { logins, registers } = require("../model");
const bcrypt = require("bcrypt");

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

            res.send("valid");
        }
        else{
            res.send("invalid password");
        }

    } else{
        res.send("please enter valid email and password");
    }



};