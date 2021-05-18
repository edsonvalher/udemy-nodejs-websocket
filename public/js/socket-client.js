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

    socket.emit('enviar-mensaje', mensaje)
})