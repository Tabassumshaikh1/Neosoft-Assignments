const express=require('express')
const router = express.Router()
const {createProduct,getProduct,getProductById,updateProduct,deleteProduct,update} = require('./controllers/product')
router.post("/createproduct",createProduct)
router.get("/create",(req,res)=>{
    res.render('create',{errmsg:'',succmsg:''});
})

router.get('/',(req,res)=>{
    res.render('home')
})

router.get("/getproduct",getProduct)

router.post("/update",update)
router.get("/updateproduct/:id",updateProduct);
router.get("/getproduct/:id",getProductById)
router.get("/deleteprod/:id",deleteProduct)
module.exports=router