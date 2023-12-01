const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    coins: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User