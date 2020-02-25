import Producto from './Producto.js'
import Precio from './Precio.js'
import ElementoPedido from './ElementoPedido.js'
import Fecha from './Fecha.js'
import Tiempo from './Tiempo.js'
import Direccion from './Direccion.js'
import Pedido from './Pedido.js'
import Cliente from './Restaurante'
class Restaurante {
    constructor() {
        this.productos = new Array()
        this.pedidos = new Array()
    }
    registrarProducto() {
        let p1 = new Producto('Pizza', 200)
        let p2 = new Producto('Pastel', 30)
        this.productos.push(p1)
        this.productos.push(p2)
    }
    listarProductos() {
        this.productos.forEach((productos, i) => {
            console.log(`${i + 1} -${this.productos[i].getDescripcionPro()}`)
        })
    }
    registrarPedido() {
        let pe1 = new Pedido(new Fecha(12, 3, 2019), new Tiempo(12, 3, 'PM'), new Cliente('Dylan ivan villarreal', 3121319198, new Direccion('av.siempre viva', 123, '-', 'tulipanes', 29119, 'colima', 'Villa de Alvarez')))
        let pe2 = new Pedido(new Fecha(12, 3, 2019), new Tiempo(12, 3, 'PM'), new Cliente('Dylan ivan villarreal', 3121319198, new Direccion('av.siempre viva', 123, '-', 'tulipanes', 29119, 'colima', 'Villa de Alvarez')))
        this.pedidos.push(pe1)
        this.pedidos.push(pe2)
    }
    listarPedidos() {
        this.pedidos.forEach((pedidos, i) => {
            console.log(`${i + 1} -${this.pedidos[i].getResumen()}`)
        })
    }
}