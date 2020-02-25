import Producto from './Producto.js'
import Precio from './Precio.js'
import ElementoPedido from './ElementoPedido.js'
import Fecha from './Fecha.js'
import Tiempo from './Tiempo.js'
import Direccion from './Direccion.js'
import Pedido from './Pedido.js'
class Restaurante{
    constructor(){
        this.productos = new Array()
        this.pedidos = new Array()
    }
    registrarProducto(){
        let p1 = new Producto('Pizza', 200)
        let p2 = new Producto('Pastel', 30)
        this.productos.push(p1)
        this.productos.push(p2)
    }
    listarProductos(){
        this.productos.forEach((productos, i) => {
        console.log(`${i + 1} -${this.productos[i].getDescripcionPro()}`)
        })
    }
    registrarPedido(){
        let pe1 = new Pedido(new Fecha(12, 3, 2019), new Tiempo(12, 3, 'PM'), )
        let pe2 = new Pedido(new Fecha(12, 3, 2019), new Tiempo(12, 3, 'PM'), )
        this.pedidos.push(p1)
        this.pedidos.push(p2)
    }
    listarPedidos(){

    }
}



/**
registrarProducto(). Agrega un nuevo producto
listarProductos(). Imprime un listado de los productos
registrarPedido(). Agrega un nuevo pedido
listarPedidos(). Imprime un listado de todos los pedidos (resúmen) */