const express=require('express');
const app=express();

const

const db = require("./model/index") //to call the database connection


// to use html code
app.set('view engine','ejs');
app.use(express.urlencoded({extended :true})); //ssr
app.use(express.json());   //like React,vuejs


app.get('/',(req,res)=>{

      res.render('home');
});


app.get('/register',(req,res)=>{
 res.render("auth/register")
});

app.get('/login',(req,res)=>{
      res.render("auth/login")
});

app.post('/register',async(req,res)=>{
      const {username,password,email} = req.body;

    await db.users.create({
        email,
        password,
        username
    })
    res.send("succesfully");
  

})



app.use(express.static('public/css/'));
// app.use(express.static('public/css/nav.css'));



const port=3000;
app.listen(port,()=>{
      console.log("project has start at port " + port);

});
