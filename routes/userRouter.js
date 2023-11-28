const express = require('express');
const userRouter = express.Router()

userRouter.get('/', (req,res) => {
    res.status(200).json('Bien ahi pai')
})

userRouter.post('/login', (req,res) => {
    try {
        
    } catch (err) {
        
    }
})

userRouter.post('/signup', (req,res) => {
    try {
        
    } catch (err) {
        
    }
})

module.exports = userRouter