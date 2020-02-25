export default class Pedido{
    /**
     * 
     * @param {number} fecha fecha en la que se pidio el pedido
     * @param {number} hora hora a la que se hizo el pedido
     * @param {string} cliente persona que hizo el pedido
     */
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