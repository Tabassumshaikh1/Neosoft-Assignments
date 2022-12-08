const express=require('express')


const router=express.Router()
router.post("/",(req,res)=>{
    res.render("form.hbs")
})
module.exports=router