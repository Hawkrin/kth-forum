const _ = require("lodash")

//Express
const express = require("express")
const router = express.Router();

//Controller
const { register } = require('../controller/user.controller')

module.exports = router

    .post("/register", (req, res) => {
        let { username, email, password } = _.pick(req.body, ["username", "password", "email"])

        register(username, password, email)
            .then((user) => {
                return res.json(user)
            })
            .catch((error) => {
                return res.json(error)
            })
    })

