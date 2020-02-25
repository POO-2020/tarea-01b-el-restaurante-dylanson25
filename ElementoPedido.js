import Producto from './Producto.js'
import Precio from './Precio.js'
class ElementoPedido{
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
