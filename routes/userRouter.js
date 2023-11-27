const express = require('express');
const userRouter = express.Router()

userRouter.get('/', (req,res) => {
    res.status(200).json('Bien ahi pai')
})

module.exports = userRouter