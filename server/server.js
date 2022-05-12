require("dotenv").config()

const express = require("express")
const http = require("http")

//Initializing app.
var app = express()
var server = http.createServer(app)
var port = 3001

//Configure app.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Database connection
require("./db").connect()
    .then((_) => {
        console.log("Connected to database!")
    })
    .catch((error) => {
        console.log("Could not connect to database, error: " + error)
    })

//API Requests
app.use("/user", require("./view/user.view"))

server.listen(port, () => {
    console.log("Server is running on port: " + port)
})
