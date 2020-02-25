export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {number} periodo 
     */
    constructor(hora, minuto, periodo){
        this.hora = hora
        this.minutos = minuto
        this.periodo = periodo.toUpperCase()
    }
    getFormato12(){
        if(this.periodo === "AM" && this.hora < 12){
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }else if(this.periodo === "PM" || this.hora >= 12){
            this.hora = this.hora - 12
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }
      
    }
    getFormato24(){
        return `${this.hora}:${this.minutos} ${this.periodo}`
    }
}
