const mongoose = require("mongoose")
const NotificationsSchema = require("./subSchema/NotificationsSchema")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ["User", "Admin"],
        required: true,
        default: "User"
    },
    activ:{
        type:Boolean,
        required:true,
        default:true
    },
    deleted:{
        type:Boolean,
        required:true,
        default:false
    },
    notifications: {
        type: [NotificationsSchema]
    }
}, {
    timestamps: true
})

module.exports = new mongoose.model("User", userSchema)