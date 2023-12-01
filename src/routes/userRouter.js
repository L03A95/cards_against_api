const express = require('express');
const userRouter = express.Router()
const {signUp} = require('../controllers/userController')

userRouter.post('/signup', async (req,res) => {
    try {
        
        const result = await signUp(req.body)
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json(err.message)
    }
})

userRouter.post('/login', (req,res) => {
    try {
        
    } catch (err) {
        
    }
})

module.exports = userRouter