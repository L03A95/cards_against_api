const User = require('../models/User')

const signUp = async (user) => {
    try {
        if(!user.username || !user.password || !user.email) {
            throw new Error("Falta un parametro")
        }
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            throw new Error("Ese email ya existe")
        }
        const existingUsername = await User.findOne({ username: user.username });
        if (existingUsername) {
            throw new Error("Ese nombre de usuario ya existe")
        }

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