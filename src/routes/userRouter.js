const express = require('express');
const userRouter = express.Router()
const {signUp} = require('../controllers/userController')

let lobbys = []

userRouter.post('/newLobby', (req,res) => {
    lobbys.push({
        id: lobbys.length,
        admin: req.body.admin,
        players: [req.body.admin]
    })
    console.log(lobbys)
    res.status(200).json(lobbys[lobbys.length - 1])
})

module.exports = userRouter