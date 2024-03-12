const express = require("express")
const router = express.Router()
const fileController = require("../controllers/fileController")
// const multer = require("multer")
// const upload = require("../middleware/upload")
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, process.cwd() + "\\ספרים")
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' +
//             Math.round(Math.random() * 1E9)
//         cb(null, uniqueSuffix + "-" + file.originalname)
//     }
// })
// const up = multer({ dest: process.cwd() + "\\ספרים" })


router.get("/", fileController.getAll)
router.post("/", 
// [ up.single('pdf')],
 fileController.newFile)
 router.put("/", fileController.updateFile)
 router.put("/tag", fileController.updateTags)
router.delete("/", fileController.deleteFile)

module.exports = router