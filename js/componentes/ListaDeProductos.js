import { Producto } from "./Productos.js";

/*---------------------------------------
Lista de Producto
----------------------------------------*/
class ListaDeProductos {

    constructor(){
        this.lista = [],
        this.total = 0,
        this.totalHistorico = 0
    }


    //Udpate
    agregarProduto(data){
        this.lista.push(data)
        this.actualizarLista()
    }

    //Delete
    modificarEstado(id){
        //Si producto tiene estado true -> false
        //si producto tiene estado false -> true
        //Producto.cambioDeEstado()
        console.log(this.lista[parseInt(id)]);
        this.lista[parseInt(id)].cambioDeEstado()
        this.actualizarLista()
        this.render()
    }
    modificarEstadoRestaurado(id){
        //Si producto tiene estado true -> false
        //si producto tiene estado false -> true
        //Producto.cambioDeEstado()
        console.log(this.lista[parseInt(id)]);
        this.lista[parseInt(id)].cambioDeEstado()
        this.actualizarLista()
        this.restaurar()
    }


    indice(){
        return this.lista.length
    }


    //Read
    render(){
        document.getElementById("root").innerHTML = ""

        this.lista.forEach(e => {

            if(e.estado){
                document.getElementById("root").innerHTML += `
                <p>${e.nombre} - ${e.descripcion} - ${e.precio} <span id="${e.id}" class="btnBorrar" style="color:red"> X </span></p>
                `
            }
        })

        this.sumaTotal()
        this.sumaTotalHistorica()
    }   

    //Restaurar


    restaurar(){
        
        document.getElementById("root").innerHTML = ""

        this.lista.forEach(e => {

            if(e.estado == false){
                document.getElementById("root").innerHTML += `
                <p>${e.nombre} - ${e.descripcion} - ${e.precio} <span id="${e.id}" class="btnRestaurar" style="color:green"> Restaurar </span></p>
                `
            }
        })



    }




    sumaTotal(){
        
        this.total = 0

        this.lista.forEach(e => {
            if(e.estado){
            this.total = this.total + parseInt(e.precio) 
            }
        })

        document.getElementById("total").textContent = `Total = ${this.total}`
    }



    
    sumaTotalHistorica(){
        
        this.totalHistorico = 0

        this.lista.forEach(e => {
            this.totalHistorico = this.totalHistorico + parseInt(e.precio) 
        })

        console.log(this.totalHistorico);
        document.getElementsByClassName("historico")[0].textContent = `Total Historico = ${this.totalHistorico}`
    }
    



    comprarTodo(){

        alert(`Pagaste ${this.total}`)

        this.lista.forEach(e => {
            if(e.estado){
                e.cambioDeEstado()
            }
        })

        this.actualizarLista()
        this.render()
    }


    iniciarLista(){
        if(JSON.parse(localStorage.getItem("lista") != null)){


            JSON.parse(localStorage.getItem("lista")).forEach(e=>{

                const producto = new Producto()

                producto.id = e.id
                producto.nombre = e.nombre
                producto.descripcion = e.descripcion
                producto.precio = e.precio
                producto.estado = e.estado
                producto.date = e.date

                this.lista.push(producto)

            })

            this.render()
        }
    }


    actualizarLista(){
        const listaString = JSON.stringify(this.lista)
        localStorage.setItem("lista", listaString)
    }


    borrarBBDD(){
        this.lista = []
        this.render()
    }




 }

 export {ListaDeProductos}