const express = require("express")
const router = express.Router()

const userController=require("../controllers/userController")

router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUser)
router.post("/",userController.addUser)
router.put("/",userController.updateUser)
router.delete("/",userController.deleteUser)

module.exports = router