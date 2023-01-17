alert("Bienvenido/a a Forrajería Espora Pets")

let productos = [
    {id: 1, nombre: "KEN-L", categoria: "perro", precio: 7000},
    {id: 3, nombre: "EXCELENT", categoria: "perro", precio: 9500},
    {id: 4, nombre: "CAT-CHOW", categoria: "gato", precio: 8000},
    {id: 2, nombre: "GATI", categoria: "gato", precio: 6500},
]

// FUNCIÓN DESCUENTO
function descuento() {
    for (const producto of productos) {
        producto.precio = producto.precio * 0.9
    }
}

function pregunta(){
    let respuesta = prompt("Si tiene cupón de descuento: Ingrese SI.")
    if (respuesta.toUpperCase() == "SI"){
        alert("Tiene 10% de descuento en toda la tienda")
        descuento()
    }
}
pregunta()

// FILTRO
// let filtro = prompt("1 para ver alimentos de perro\n2 para ver alimentos de gato\n3 para ver todos.")
// if(filtro == "1"){
//     perros = productos.filter(productos => productos.categoria == "perro")
//     for (let i = 0; i < perros.length; i++) {
//         alert(perros[i].nombre)
//     }
// }else if(filtro == "2"){
//     gatos = productos.filter(productos => productos.categoria == "gato")
//     for (let i = 0; i < perros.length; i++) {
//         alert(gatos[i].nombre)
//     }
// }else{
//     for (let i = 0; i < productos.length; i++) {
//         alert(productos[i].nombre)
//     }
// }

// CARRITO
let carrito = []
do {
    añadirCarrito = prompt("1 para añadir KEN-L perros\n2 para añadir EXCELENT perros\n3 para añadir CAT-CHOW gatos\n4 para añadir GATI gatos\n5 para ver Carrito")
if (añadirCarrito == "1"){ 
    carrito.push(productos[0])
}else if(añadirCarrito == "2"){ 
    carrito.push(productos[1])
}else if(añadirCarrito == "3"){ 
    carrito.push(productos[2])
}else if(añadirCarrito == "4"){ 
    carrito.push(productos[3])
}else if(añadirCarrito == "5"){
    mostrarCarrito ()
}
} while (añadirCarrito < 5) 

function mostrarCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        alert(carrito[i].nombre + " $" + carrito[i].precio)
    }
    totalCarrito = carrito.reduce((acum, carrito) => acum + carrito.precio, 0)
    alert("Su total es: $" + totalCarrito)
}




