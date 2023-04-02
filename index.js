const express=require('express');
const app=express();
const mongoose=require('./config/mongodb');
const port=8000;
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine','ejs');
app.set("views",'./views');
const express_ejs=require('express-ejs-layouts');
app.use(express_ejs);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
const route=require('./routes/index');

app.use('/',route);
app.listen(port,function(err){
   if(err){
    console.log(`Error in running the server : ${err}`);
   }
   console.log(`Server is running on the port : ${port}`);
})