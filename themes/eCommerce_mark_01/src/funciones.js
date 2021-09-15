//Esta sección sirve para crear el contador de productos
const resultado = document.getElementById("contador")
const incrementar = document.getElementById("plusCircle")
const reducir = document.getElementById("minusCircle")
let cantidad = 1

incrementar.addEventListener("click", () => {
    cantidad++
    modificarContador()
})
reducir.addEventListener("click", () => {
    cantidad--
    modificarContador()
})
modificarContador = () => {    //Agregué una condicional IF para poder poner un limite al contador y que no se vuelva negativo
    if( cantidad >= 1){   
        resultado.textContent = cantidad
    } else {
        cantidad = 1
    }
}

//Sección
const nombreUsuario = document.getElementById("nombreUsuario");
const telefonoUsuario = document.getElementById("telefonoUsuario");
const dniUsuario = document.getElementById("dniUsuario");
const distritoUsuario = document.getElementById("distritoUsuario");
const direccionUsuario = document.getElementById("direccionUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const metodoEntrega = document.getElementById("metodoEntrega");
const nombreProducto = document.getElementById("nombreProducto");
const btnEnviar = document.getElementById("btnEnviarDatos");


btnEnviar.addEventListener("click", () => {
    location.href = `https://api.whatsapp.com/send/?phone=51960995232&text=Hola%2C+Me+interesa+el+siguiente+producto%3A%0AMi+nombre+es%3A+${nombreUsuario.value}%0AMi+DNI+es%3A+${dniUsuario.value}%0AMi+Teléfono+es%3A+${telefonoUsuario.value}%0AMi+Distrito+es%3A+${distritoUsuario.value}%0AVivo+en%3A+${direccionUsuario.value}%0AMi+correo+electrónico+es%3A+${correoUsuario.value}%0AMétodo+de+entrega%3A+${metodoEntrega.value}%0A%0ADetalle+del+producto%3A%0ANombre+del+producto%3A+${nombreProducto.textContent}%0ACantidad%3A+${resultado.textContent}`
})

// location.href = `https://api.whatsapp.com/send/?phone=51960995232&text=Hola, mi nombre es ${nombreUsuario} vivo en ${direccionCliente} y quiero ${cantidadProducto} ${nombreProducto}, gracias.`

// Hola%21+Acabo+de+realizar+el+siguiente+pedido%3A%0A
// Nombre%3A++51993722873+Aybar%0A
// DNI%3A+71336104%0A
// Pedido%3A+OR-24836D64%0A
// M%C3%A9todo+de+entrega%3A+Delivery%0A
// Direcci%C3%B3n%3A+Av+Pachacutec+2717+%28Casa%29%0A
// Lima%2C+Lima%2C+Villa+Maria+del+Triunfo%0A
// Correo%3A+rodrigo0830%40gmail.com%0A
// %0A
// %EF%BF%BD+Bar+ecol%C3%B3gico+colgante++-+1+un.+-+S%2F+280.00++-+http%3A%2F%2Fecopractico.tiendada.com%2Fproduct%2FPR-495A2574%0A
// %EF%BF%BD+Subtotal%3A+S%2F+280.00%0A
// %EF%BF%BD+Env%C3%ADo%3A+--%0A
// %EF%BF%BD+Total%3A+Por+confirmar%0A

// Hola%2C+Me+interesa+el+siguiente+producto%3A%0A
// Mi+nombre+es%3A+${nombreUsuario}%0A
// Mi+DNI+es%3A+${dniUsuario}%0A
// Mi+Teléfono+es%3A+${telefonoUsuario}%0A
// Mi+Distrito+es%3A+${distritoUsuario}%0A
// Vivo+en%3A+${direccionUsuario}%0A
// Mi+correo+electrónico+es%3A+${correoUsuario}%0A
// Método+de+entrega%3A+${metodoEntrega}%0A
// %0A
// Detalle+del+producto%3A%0A
// Nombre+del+producto%3A+${nombreProducto}%0A
// Cantidad%3A+${resultado}



