import Producto from './Producto.js'
import Precio from './Precio.js'
import ElementoPedido from './ElementoPedido.js'
import Fecha from './Fecha.js'
import Tiempo from './Tiempo.js'
class Pedido{
    constructor(fecha, hora, cliente){
        this.elePedidos = new Array()
        this.fecha = fecha 
        this.hora = hora
        this.cliente = cliente
    }
    getResumen(){
        return`${this.fecha.getFecha3()} ${this.hora.getFormato24()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}`
    }
    getNumeroElementos(){
        return(this.elePedidos.length)
    }
    getProductos(){
         let acum = 0
         this.elePedidos.forEach(elemento => {
            acum = elemento.cantidad + acum
            })
         return(acum)
    }
    getCostoTotal(){
        let acum = 0;
        this.elePedidos.forEach(elemento => {
        acum = (elemento.cantidad * elemento.producto.precio.valor) + acum
        })
    }
    agregarElemento(){
        this.elePedidos.push(elemento)
    }
    listarElementos(){
        this.elePedidos.forEach((elemento, i) => {
            console.log(`${i} - ${elemento.getDescripcion()}`)
            })
    }
}