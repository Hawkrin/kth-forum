//Utils
const bcrypt = require("bcrypt")

//Model
const User = require("../model/user.model")

/**
 * Register user by taking username, password and email.
 * Encrypting password with hash and salt.
 * Returning a promise, resolve if successfully register user.
 * Reject if probles occured registering user. 
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} email 
 * @returns {Promise}
 */
const register = (username, password, email) => {
    return new Promise((resolve, reject) => {

        User.findOne({ $or: [{ username }, { email }] }, (error, user) => {
            if (error) { console.log(error); return reject(error.message); }
            if (user) { return reject("User already exists") }

            const salt = bcrypt.genSaltSync(10)
            const encryptedPassword = bcrypt.hashSync(password, salt)

            const newUser = new User({
                username,
                password: encryptedPassword,
                email
            })

            newUser.save((error) => {
                if (error) { console.log(error); reject(error.message); }
                resolve(newUser)
            })
        })
    })
}

module.exports = { register }