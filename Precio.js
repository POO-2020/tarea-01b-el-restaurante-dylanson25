export default class Precio{
    /**
     *
     * @param {number} valor | precio del articulo
     */
    constructor(costo) {
        this.costo = costo
    }

    getPrecio() {
        return "$" + new Intl.NumberFormat("en-US").format(this.costo)
    }
}