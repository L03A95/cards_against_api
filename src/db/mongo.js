const mongoose = require('mongoose')
const { MONGO_URL } = process.env

  mongoose.connect(MONGO_URL).then((db) => {console.log('Se ha conectado exitosamente a MongoDB')})
  .catch((err) => console.log(err))