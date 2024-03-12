const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
    } catch (ex) {
        console.log("******************");
        console.log("Error connection to DB");
        console.log(ex);
    }
}

module.exports = connectDB