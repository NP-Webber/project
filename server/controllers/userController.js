const User = require("../models/User")
const bcrypt = require("bcrypt")

const getAllUsers = async (req, res) => {

    const users = await User.find({ deleted: false }, { password: 0 }).lean()
    if (!users.length) {
        return res.status(404).json({
            error: true,
            message: "no users",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: users
    })
}
const getUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id, { password: 0 }).lean()

    if (!user) {
        return res.status(404).json({
            error: true,
            message: "user not found",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: user
    })
}
const addUser = async (req, res) => {

    const { username, password, roles, activ } = req.body
    if (!username || !password) {
        return res.status(400).json({
            error: true,
            message: "name and password are required",
            data: null
        })
    }

    const check = await User.findOne({ username }).lean()
    if (check) {
        return res.status(409).json({
            error: true,
            message: "username is exist",
            data: null
        })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hash, roles, activ })
    if (!user) {
        return res.status(400).json({
            error: true,
            message: "something wrong",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: user
    })

}
const updateUser = async (req, res) => {
    const { id, roles, activ } = req.body
    if (!id || !username || !password) {
        return res.status(400).json({
            error: true,
            message: "id is required",
            data: null
        })
    }
    const user = await User.findById(id)
    if (!user) {
        return res.status(400).json({
            error: true,
            message: "no user found",
            data: null
        })
    }
    user.roles = roles
    user.activ = activ

    const updatedUser = await user.save()

    res.json({
        error: false,
        message: "",
        data: updatedUser
    })
}
const deleteUser = async (req, res) => {

    const { id } = req.body
    if (!id) {
        return res.status(400).json({
            error: true,
            message: "id is required",
            data: null
        })
    }
    const user = await User.findById(id, { password: 0 })
    if (!user) {
        return res.status(400).json({
            error: true,
            message: "no user found",
            data: null
        })
    }
    user.deleted = true
    const deletedUser = await user.save()

    res.json({
        error: false,
        message: "",
        data: user
    })

}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser }