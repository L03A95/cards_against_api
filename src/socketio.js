const {lobbys} = require('./db/mongo')

module.exports = (io) => {
  
  io.on('connection', (socket) => {
    
      // socket.on('newLobby', (data) => {
      //   console.log(data);
  
        
      //   io.emit('mensaje', '¡Hola desde el servidor!');
      // });

      socket.on('LobbyConnect', (data) => {
        if (!lobbys[data.id].players.some((player) => player.user === data.user.user) && data.user.user != '') {
          lobbys[data.id].players.push(data.user)
        }
        
        console.log("Se ha conectado" + data.user + "a la sala " + data.id)

        io.emit('playersList', {
          list: lobbys[data.id].players
        })
      })

      socket.on('LobbyDisconnect', (data) => {
        let removeUser = lobbys[data.id].players.indexOf(data.user);
        lobbys[data.id].players.splice(removeUser, 1);

        console.log("Se ha desconectado" + data.user + "de la sala " + data.id)

        io.emit('playersList', {
          list: lobbys[data.id].players
        })
      })
  
      // Manejar la desconexión del cliente
      socket.on('disconnect', () => {
        console.log('Usuario desconectado');
      });
    });
  };
