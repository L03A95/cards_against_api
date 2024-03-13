const express = require('express');
const userRouter = express.Router()
const {signUp} = require('../controllers/userController')

let lobbys = []

userRouter.post('/newLobby', async (req,res) => {
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

userRouter.post('/searchLobby/:id', async (req, res) => {
    try {
        let result = await lobbys.find((lobby) => lobby.id == req.params.id);
        if (!result) {
            throw new Error("No se ha encontrado un Lobby con ese id")
        }
        lobbys[req.params.id].players.push({user: req.body.user, admin: false})
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

module.exports = userRouter