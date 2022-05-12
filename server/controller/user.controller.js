const User = require("../model/user.model")

const register = (username, password, email) => {
    return new Promise((resolve, reject) => {

        //Check if email is valid. !
        //Email cannot be already in use.
        //password fulfilles requirement !
        //Username cannot be already in use.

        User.findOne({$or:[{username}, {email}]}, (error, user) => {
            if (error) { console.log(error); return reject(error.message); }
            if (user) { return reject("User already exists")}

            let newUser = new User({
                username,
                password,
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