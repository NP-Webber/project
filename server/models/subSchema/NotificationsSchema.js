const mongoose = require("mongoose")

const NotificationsSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    body: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = NotificationsSchema