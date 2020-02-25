export default class Cliente {
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
    }
    getPerfilCli() {
        return`${this.nombre} ${this.telefono} ${this.direccion.getFormatoCortoDir()}`
    }
}