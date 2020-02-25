export default class Producto{
    constructor(nombre, costo){
        this.nombre = nombre
        this.precio = new Precio(costo)
    }
    getDescripcionPro(){
        return`${this.nombre} - ${this.precio.getPrecio()}`
    }
}