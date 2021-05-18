const socketController = (socket) => {
    //console.log('Cliente conectado!', socket.id)

    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    //evento listener personalizado recibido desde cliente
    socket.on('enviar-mensaje', (payload, callback) => {
        //console.log(payload)
        //this.io.emit('enviar-mensaje', payload) //cuando el servidor lo envía
        const id = 123456
        callback({ id, fecha: new Date().getTime() })


        socket.broadcast.emit('enviar-mensaje', payload) //para que lo reciba todos los cliente



    })

}


module.exports = {
    socketController
}