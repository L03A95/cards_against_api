const express = require('express');
const userRouter = express.Router()
const {signUp} = require('../controllers/userController')

let lobbys = []

userRouter.post('/newLobby', (req,res) => {
    try {
        lobbys.push({
            id: lobbys.length,
            players: [req.body]
        })
        console.log(lobbys)
        res.status(200).json(lobbys[lobbys.length - 1])
    } catch (err) {
        res.status(400).json(err.message)
    }
    
})

userRouter.get('/searchLobby', (req, res) => {
    try {
        let result = lobbys.find((lobby) => lobby.id = req.body.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(err.message)
    }
})

module.exports = userRouter