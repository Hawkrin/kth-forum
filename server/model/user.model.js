const mongoose = require("mongoose")
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validationIsStrongPassword:{
            validator: validator.isStrongPassword("", {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1}),
            message: 'The password needs to be at least 8 digits and contain at least 1 uppercase letter, 1 lowercase letter and 1 number',
        },
        validationNoPassword:{
            validator: validator.isEmpty("", { ignore_whitespace:false }),
            message: 'A password needs to be entered',
        },
    },
    email: {
        type: String,
        required: true,
        validationEmailFormat:{
            validator: validator.isEmail('foo@bar.com'),
            message: '{VALUE} is not a valid email',
        },
        validationNoEmail:{
            validator: validator.isEmpty("", { ignore_whitespace:false }),
            message: 'An email needs to be entered',
        },
    }
})

module.exports = mongoose.model("user", userSchema)