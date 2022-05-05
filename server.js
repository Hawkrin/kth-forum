const express = require("express")
const http = require("http")

//Initializing app.
var app = express()
var server = http.createServer(app)
var port = 3000

//Configure app.
app.use(express.json())
app.use(express.urlencoded({extended: true}))


server.listen(port, () => {
    console.log("Server is running on port: " + port)
})