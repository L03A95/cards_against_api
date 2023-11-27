const express = require('express')
const route = require('./routes/main')
const app = express()
const port = 3001

app.use('/', route)

app.listen(port, () => {
    console.log('se ha iniciado el servidor en el puerto ' + port)
})