class Direccion{
    constructor(calle, noEx, noIn, colonia, codigoP, ciudad, municipio ){
        this.calle = calle
        this.noEx = noEx
        this.noIn = noIn
        this.colonia = colonia
        this.codigoP = codigoP
        this.ciudad = ciudad
        this.municipio = municipio
    }
    getFormatoCortoDir(){
        return`${this.calle} ${this.noEx}`
    }
    getFormatoExtendidoDir(){
        
        return`${this.calle} ${this.noEx} ${this.noIn} ${this.colonia} ${this.codigoP} ${this.ciudad} ${this.municipio}`
    }
}
let app = new Direccion('av.siempre viva', 123, '-', 'tulipanes', 29119, 'colima', 'Villa de Alvarez' )
console.log(app.getFormatoExtendidoDir())
/**
getFormatoCorto(). Regresa la dirección indicada pero solo con la calle y el número exterior, por evemplo Av. Revolución 123
getFormatoExtendido() Regresa la dirección indicada pero incluyendo todos los datos
**/