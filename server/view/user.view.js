const _ = require("lodash")
const bcrypt = require('bcrypt');

const { register } = require('../controller/user.controller')


module.exports = (app) => {
    app.post("/api/user/register", (req, res) => {

        let { username, email, password } = _.pick(req.body, ["username", "password", "email"])

        register(username, password, email)
            .then((user) => {
                return res.json(user)
            })
            .catch((error) => {
                return res.json(error)
            })
    })
}