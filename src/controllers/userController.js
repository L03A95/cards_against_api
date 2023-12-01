const User = require('../models/User')

const signUp = async (user) => {
    try {

        const newUser = new User({...user})
        await newUser.save()
        return newUser
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    signUp
}