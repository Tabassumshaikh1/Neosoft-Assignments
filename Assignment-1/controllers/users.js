const fs = require('fs')
const form =(req,res)=>{
    
        let fname = req.body.fname;
        var data = req.body.data;
       if(fs.existsSync(`./users/${fname}.txt`)){
           res.render('form',{errmsg:"file is already exists" , succmsg:""})
       }
       else{
           fs.writeFile(`./users/${fname}.txt`,`${data}`,(err)=>{
                if(err){
                    res.render('form',{errmsg:"Something went wrong",succmsg:""})
                }
               res.render('form',{succmsg:"File is created",errmsg:""})
           })
       }   
   }
const readdata=(req,res)=>{
    let fname = req.body.fname;
    let data= fs.readFile(`./users/${fname}.txt`,(err)=>{
        console.log(data)
        if(err){
            res.render('read',{content:"",errmsg:"File does not exists", succmsg:""})
        }
        else{

            res.render('read',{content:`${data}`,succmsg:"here is ur data",errmsg:""})
        }

    });
}

const updatedata=(req,res)=>{
    let fname=req.body.name;
    let bodydata=req.body.msg;
    var data=fs.readFileSync(`./users/${fname}.txt`)
    fs.appendFileSync(`./users/${fname}.txt`,bodydata)
    console.log(data.toString());
    res.render('update',{content:data,Fname:fname})
}
const deletedata=(req,res)=>{
    let fname=req.body.name;
    fs.unlinkSync(`./users/${fname}.txt`);
    res.render('delete',{title:`${fname}.txt file is deleted successfully`,Fname:fname})
}

module.exports={form,readdata,updatedata,deletedata};