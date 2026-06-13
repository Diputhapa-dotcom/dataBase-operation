


const { registers } = require("../model")

exports.blogController=async (req,res)=>{
   const datas= await registers.findAll();
console.log(datas[0].image)
   res.render("blog.ejs",{datas:datas})

}