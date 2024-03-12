const File = require("../models/File")

const getAll = async (req, res) => {
    const list = await File.find().lean()
    if (!list.length) {
        return res.status(404).json({
            error: true,
            message: "no files",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: list
    })
}

const newFile = async (req, res) => {

    const {}=req.body
    const reqb = req.body
    res.json( {body:req.body,file:req.file})
}

const updateFile = async (req, res) => {

}
const updateTags=async (req,res)=>{

}

const deleteFile = async (req, res) => {

}

module.exports = { getAll, newFile, updateFile,updateTags, deleteFile }
