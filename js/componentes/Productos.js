/*---------------------------------------
Producto
----------------------------------------*/

class Producto {

    constructor(){
        this.id,
        this.nombre,
        this.descripcion,
        this.precio,
        this.estado,
        this.date = new Date()
    }

    //Modificar estado
    cambioDeEstado(){

        if(this.estado){
            this.estado = false
        }else{
            this.estado = true
        }

    }

}

export {Producto}