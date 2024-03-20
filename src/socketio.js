const {lobbys} = require('./db/mongo')

module.exports = (io) => {
  
  io.on('connection', (socket) => {

      socket.on('LobbyConnect', (data) => {
        if (!lobbys[data.id] || !lobbys[data.id].players) {
          return 
        }

        if (!lobbys[data.id]?.players.some((player) => player.user === data.user.user) && data.user.user != '') {
          lobbys[data.id].players.push(data.user)
        }
        
        // console.log("Se ha conectado" + data.user + "a la sala " + data.id)

        io.emit('playersList', {  //hacer que este evento se envie condicionalmente
          list: lobbys[data.id].players
        })
      })

      socket.on('LobbyDisconnect', (data) => {
        if (!lobbys[data.id] || !lobbys[data.id].players) {
          return
        }

        let result = lobbys[data.id]?.players.filter((e) => {
          return e.user !== data.user
        });
        console.log(result)

        console.log("Se ha desconectado " + data.user + " de la sala " + data.id)


        lobbys[data.id].players = result;

        io.emit('playersList', { //hacer que este evento se envie condicionalmente
          list: lobbys[data.id].players
        })
      })
  
      // Manejar la desconexión del cliente
      socket.on('disconnect', () => {
        console.log('Usuario desconectado');
      });
    });
  };
