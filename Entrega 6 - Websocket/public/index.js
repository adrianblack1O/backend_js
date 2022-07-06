const socket = io();

//Alta de productos

let title = document.getElementById('title');
let price = document.getElementById('price');
let thumb = document.getElementById('thumb');

document.getElementById('button_p').addEventListener('click', () => {
    let input_p = { "title" : title.value, "price" : price.value, "thumbnail" : thumb.value }
    socket.emit('produ_item', input_p);

    //Limpio los inputs
    const inputs = document.querySelectorAll('#title, #price, #thumb');

    inputs.forEach(input => {
      input.value = '';
    });
});

socket.on('list_produ', productos => {
    const produInput = productos
    .map(produ => `Producto: ${produ.producto.title} Precio: ${produ.producto.price}$ Thumbnail: ${produ.producto.thumbnail}`).join("<br>")
    document.getElementById('p_list').innerHTML = produInput;
});

//Chat de atencion
let nickname = document.getElementById('nickname');
let email = document.getElementById('mensaje')

document.getElementById('button_m').addEventListener('click', () => {
    let input_m = { "nickname" : nickname.value, "mensaje" : mensaje.value }
    socket.emit('mensajes', input_m);
    document.getElementById('mensaje').value = ''

socket.on('chat', mensajes => {
    const mensajeInput = mensajes
    .map(msj => `${msj.mensaje.nickname}: ${msj.mensaje.mensaje} `).join("<br>")
    document.getElementById('m_list').innerHTML = mensajeInput;
});

});

