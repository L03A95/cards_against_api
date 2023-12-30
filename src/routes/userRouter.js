const express = require('express');
const userRouter = express.Router()
const {signUp} = require('../controllers/userController')

userRouter.get('/', (req,res) => {
    res.status(200).json("pene")
})

module.exports = userRouter