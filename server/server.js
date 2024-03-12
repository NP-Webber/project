require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/connectDB")

const app = express()

const PORT = process.env.PORT || 1109
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("ספרים"))
app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/file", require("./routes/fileRoutes"))

mongoose.connection.once("open", () => {
    console.log("connected to DB success");
    app.listen(PORT, () => {
        console.log(`Server runing on port ${PORT}`);
    })
})

mongoose.connection.on("error", err => {
    console.log(err);
})