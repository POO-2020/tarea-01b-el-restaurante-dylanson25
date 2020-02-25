export default class Direccion{
    /**
     * 
     * @param {strin} calle 
     * @param {number} noEx numero exterior 
     * @param {number} noIn numero interior 
     * @param {string} colonia 
     * @param {number} codigoP codigo postal  
     * @param {string} ciudad 
     * @param {string} municipio 
     */
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
/*let app = new Direccion('av.siempre viva', 123, '-', 'tulipanes', 29119, 'colima', 'Villa de Alvarez' )
console.log(app.getFormatoExtendidoDir())*/
