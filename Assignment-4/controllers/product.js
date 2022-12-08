const productModel = require('../model/proschema')
const createProduct=async(req,res)=>{
    const proData=req.body;
    // console.log(proData)
    let insert = new productModel(proData);
    await(insert.save((err)=>{
       
        if(err) res.render('create',{errmsg:"something went wrong",succmsg:''});
        else res.render('create',{succmsg:"product is addesd sucessfully",errmsg:''});
    }))
}
const getProduct=(req,res)=>{
    productModel.find({},(err,data)=>{
        if(err) res.send("error")
        else{
            res.render('index',{ prods:data});
        }
    })
}
const getProductById= async(req,res)=>{
    let pid=req.params.id;
    let product= await productModel.findById(pid);
    
    if(!product){
        res.status(404).send("Product with id not found")
    }
    res.send(product)
}
// const updateProduct=(req,res)=>{
//     let pid=req.params.id;
//     let formdata=req.body;
//     // console.log({pid})
//     // console.log(formdata)
//     productModel.updateOne({_id:pid},{$set:formdata},(err)=>{
//         if(err) console.log(err)
//         else{
//             res.render('/getProduct',200,{prods:" "})
//         }
//     })
// }
//EDIT PRODUCT DETAILS
function updateProduct(req, res) {
    let pid = req.params.id;
    console.log(pid);
    productModel
      .findOne({ _id: pid }) //findAndModify
      .then((result) => {
        console.log(result);
        res.render("edit", { prods: result, errmsg: "", succmsg: "", msg: pid });
        console.log(pid);
      })
      .catch((err) => console.log(err));
  }
  function update(req, res) {
    let { pname, price, description, quantity, image, _id } = req.body;
  
    productModel
      .updateOne(
        {_id:_id },
        {
          $set: {
            name: pname,
            price: price,
            description: description,
            quantity: quantity,
            img: image,
          },
        }
      )
      .then((data1) => {
        res.render("edit", {
          prods: "",
          succmsg: "Product  is Successfully updated !!!!!!!",
          msg: "",
          errmsg: "",
        });
      })
      .catch((err) => {
        res.render("edit", {
          prods: "",
          succmsg: "",
          errmsg: "something went wrong",
          msg: "",
        });
      });
  }
let deleteProduct=async(req,res)=>{
    let pid=req.params.id
    const pmodel = await productModel.findByIdAndDelete(pid) 
    res.redirect('/') 
    
}
module.exports = {createProduct,getProduct,getProductById,updateProduct,deleteProduct,update}