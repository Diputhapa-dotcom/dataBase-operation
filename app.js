const express=require("express");
const { logins } = require("./model");
const  bcrypt = require("bcrypt");
const { where } = require("sequelize");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./model/index");

app.set("view engine","ejs");


app.get('/table',async (req,res)=>{
      const data=await logins.findAll();
      res.render("table.ejs",{login:data});
      
})
app.get("/login",(req,res)=>{
      res.render("login.ejs");
});

app.post("/login", async (req,res)=>{
      const {email,password} = req.body;
      if(!email||!password){
            return `please  email password`;
      }
       
     await logins.create({
            email,
            password:await bcrypt.hashSync(password,10)
      });

      res.redirect("/table");


         app.get("/delete/:id",async (req,res)=>{
           const id= req.params.id;
           console.log(id);
           await logins.destroy({
            where:{
                  id:id,
            }
           });

        res.redirect("/table")
         });
});


app.get("/update/:id",async (req,res)=>{
     const id=req.params.id;
    const pkey= await logins.findByPk(id);
      res.render("updateData.ejs",{ids:pkey});
//      console.log(id);



});
app.post("/updatedData/:id",async (req,res)=>{
 const id = req.params.id;
 const {email,password}=req.body;

 await logins.update({
      email:email,
      password:password
 },{
      where:{
            id:id,
      }
 });
  
   res.redirect("/table");
});





app.listen('3000',()=>{
      console.log("the project has started at 3000 port");
});
