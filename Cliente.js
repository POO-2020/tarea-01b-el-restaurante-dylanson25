export default class Cliente {
    /**
     * 
     * @param {string} nombre nombre del clinte
     * @param {number} telefono numero a contactar
     * @param {sring} direccion lugar a donde se va a enviar la comida
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
    }
    getPerfilCli() {
        return`${this.nombre} ${this.telefono} ${this.direccion.getFormatoCortoDir()}`
    }
}