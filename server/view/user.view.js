const _ = require("lodash")
const bcrypt = require('bcrypt');
const { register } = require('../controller/user.controller')


module.exports = (app) => {
    app.post("/api/user/register", async (req, res) => {

        
        let { username, email, password } = _.pick(req.body, ["username", "password", "email"])

        const encryptedPassword = await bcrypt.hash(password, 10);

        register(username, encryptedPassword, email)
            .then((user) => {
                return res.json(user)
            })
            .catch((error) => {
                return res.json(error)
            })
    })
}