require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const http = require("http")

//Initializing app.
var app = express()
var server = http.createServer(app)
var port = 3000

//Configure app.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Database connection
mongoose.connect("mongodb+srv://" + process.env.USER + ":" + process.env.PASSWORD + "@forum.7exj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected!")
    })
    .catch((error) => {
        console.log(error)
    })

server.listen(port, () => {
    console.log("Server is running on port: " + port)
})