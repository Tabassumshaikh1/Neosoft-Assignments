const express=require('express')
const fs = require('fs')
const PORT=2000
const app=express();
// const 
// const router=express.Router()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const exphbs = require("express-handlebars")
app.engine('handlebars',exphbs.engine())
app.set("view engine","handlebars")
app.set("views",'./views')
const {form,readdata,updatedata,deletedata} = require('./controllers/users.js')
app.get("/",(req,res)=>{
    res.render('./partials/dshboard')
})
app.get("/create",(req,res)=>{
    res.render('form',{errmsg:"" , succmsg:""})
})
app.post("/readdata",readdata)
app.post('/updatedata',updatedata)

app.post('/deletedata',deletedata)

app.get("/read",(req,res)=>{
    res.render('read',{content:"",succmsg:"",errmsg:""})
})
app.get("/update",(req,res)=>{
    res.render('update',{content:"",succmsg:"",errmsg:""})
})


app.get("/delete",(req,res)=>{
    res.render('delete',{content:""})
})
app.post("/postdata",form)

app.listen(PORT,(err)=>
{
   if (err) console.log(err)
})