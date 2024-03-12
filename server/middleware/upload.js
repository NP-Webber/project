const File = require("../models/File")
const multer = require("multer")


const upload=async (req,res,next)=>{
    console.log(`name: ${req.body.name}, originalname: ${Express.Multer.File.originalname}`);
    next()
}
module.exports=upload
