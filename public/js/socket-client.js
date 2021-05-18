//referencias del HTML

const lblonline = document.querySelector('#lblonline')
const lbloffline = document.querySelector('#lbloffline')

const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')


const socket = io()

socket.on('connect', () => {
    lbloffline.style.display = 'none'
    lblonline.style.display = ''
})

socket.on('disconnect', () => {
    lblonline.style.display = 'none'
    lbloffline.style.display = ''
})

//para escuchar desde el servidor
socket.on('enviar-mensaje', (payload) => {
    console.log('Viene desde el server ', payload)
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }

    //solo este cliente recibe desde el servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el servidor', id)
    })
})