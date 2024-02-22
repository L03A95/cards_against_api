module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('Usuario conectado');
  
      // Manejar eventos desde el cliente
      socket.on('newLobby', (data) => {
        console.log(data);
  
        // Enviar un mensaje a todos los clientes conectados
        io.emit('mensaje', '¡Hola desde el servidor!');
      });
  
      // Manejar la desconexión del cliente
      socket.on('disconnect', () => {
        console.log('Usuario desconectado');
      });
    });
  };