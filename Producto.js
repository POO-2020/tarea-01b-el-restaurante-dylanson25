export default class Producto{
    /**
     * 
     * @param {string} nombre nombre del producto
     * @param {number} costo costo del producto
     */
    constructor(nombre, costo){
        this.nombre = nombre
        this.precio = new Precio(costo)
    }
    getDescripcionPro(){
        return`${this.nombre} - ${this.precio.getPrecio()}`
    }
}