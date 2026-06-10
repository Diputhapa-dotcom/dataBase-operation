const { registers } = require("../model")

exports.tableController=async (req,res)=>{
//   const id =  req.params.id;
//   console.log(id);
   const data= await registers.findAll();
   res.render("table",{datas:data})

}


exports.tablePost=(req,res)=>{
   const id= req.params.id;
   console.log(id)
 res.redirect("/update");
}