import { ListaDeProductos } from "./componentes/ListaDeProductos.js";
import { Producto } from "./componentes/Productos.js";

/*######################################################
                       Constantes
########################################################*/

const lista = new ListaDeProductos()
lista.iniciarLista()

/*######################################################
                       Eventos
########################################################*/

//Evento constructor de productos
document.getElementById("enviar").addEventListener("click", (e)=>{
    e.preventDefault()
    crearProducto()
})

//Evento de cambio de estado
document.addEventListener("click",(e)=>{

    if(e.target.className === "btnBorrar"){
        lista.modificarEstado(e.target.id)
    } else if(e.target.className === "btnRestaurar"){
        lista.modificarEstadoRestaurado(e.target.id)
    }
})

//Comprar todo
document.getElementById("comprarActual").addEventListener("click",()=>{
    lista.comprarTodo()
})

//BorrarBBDD
document.getElementById("borrarBBDD").addEventListener("click", () => {
lista.borrarBBDD()
})

//Evento Restaurar
document.getElementById("restaurar").addEventListener("click",()=>{
    lista.restaurar()
})

//Evento vista de productos
document.getElementById("vistaProductos").addEventListener("click",()=>{
    lista.render()
})

/*######################################################
                       Logica
########################################################*/


const crearProducto = () => {

    const producto = new Producto()

    producto.nombre = document.getElementById("nombre").value
    producto.descripcion = document.getElementById("descripcion").value
    producto.precio = document.getElementById("precio").value
    producto.id = lista.indice()
    producto.estado = true

    lista.agregarProduto(producto)

    lista.render()

}

