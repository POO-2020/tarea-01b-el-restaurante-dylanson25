export default class ElementoPedido{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad cantidad que se pidio
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcionEP(){
        return`${this.cantidad} x ${this.producto.getDescripcionPro()}`
    }
}
/*let app = new ElementoPedido(new Producto('pizza', 200), 2)
console.log(app.getDescripcionEP())*/
