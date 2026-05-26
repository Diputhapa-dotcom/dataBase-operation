const express=require('express');
const app=express();

// to use html code
app.set('view engine','ejs');

app.get('/',(req,res)=>{
      const name="dipu thapa";
      const address="devdaha"
      res.render('index',{data:name,address})
});





app.listen(3000,()=>{
      console.log("hello")

});
