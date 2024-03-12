const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    tags: {
        type: [String]
    }
}, {
    timestamps: true
})

module.exports = new mongoose.model("File", fileSchema)