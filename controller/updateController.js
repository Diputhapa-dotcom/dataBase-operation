const { where } = require("sequelize");
const { registers } = require("../model");

exports.updateController=(req,res)=>{
    const id=req.params.id;
    res.render("update.ejs",{id:id});

};
exports.updatePost=async (req,res)=>{
    const id=req.params.id;
    const {username,email}=req.body;
//    const {id,username,email,hashedPassword}= await registers.findByPk(id);
  
  await registers.update({
    username:username,
    email:email
    // password: hashedPassword

   },{
    where:{
        id:id
    }
   });
   res.redirect("/table");

};




