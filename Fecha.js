export default class Fecha {
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes - 1, dia)
        this.fecha2 = new Date
        this.Mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    }
    getAños() {
        let lapso = this.fecha2.getUTCFullYear() - this.fecha.getFullYear()
        return (`${lapso} años`)
    }
    getMeses() {
        let lapso
        if (this.fecha2.getUTCFullYear() === this.fecha.getFullYear()) {
            lapso = this.fecha2.getMonth() - this.fecha.getMonth()
            return (` ${lapso} MESES`)
        } else if (this.fecha2.getUTCFullYear() > this.fecha.getFullYear()) {
            lapso = ((this.fecha2.getUTCFullYear() - this.fecha.getFullYear()) * 12) + (this.fecha2.getMonth() - this.fecha.getMonth())
            return (` ${lapso} MESES`)
        }
    }
    getSemana() {
        let lapso
        if (this.fecha2.getUTCFullYear() === this.fecha.getFullYear()) {
            lapso = (this.fecha2.getMonth() - this.fecha.getMonth()) * 4
            return (` ${lapso} SEMANAS`)
        } else if (this.fecha2.getUTCFullYear() > this.fecha.getFullYear()) {
            lapso = ((this.fecha2.getUTCFullYear() - this.fecha.getFullYear()) * 12) + (this.fecha2.getMonth() - this.fecha.getMonth())
            return (` ${lapso * 4} SEMANAS`)
        }
    }
    getDias() {
        let lapso
        if (this.fecha2.getUTCFullYear() === this.fecha.getFullYear()) {
            lapso = (this.fecha2.getMonth() - this.fecha.getMonth()) * 28
            return (` ${lapso} DIAS`)
        } else if (this.fecha2.getUTCFullYear() > this.fecha.getFullYear()) {
            lapso = ((this.fecha2.getUTCFullYear() - this.fecha.getFullYear()) * 12) + (this.fecha2.getMonth() - this.fecha.getMonth())
            return (` ${(lapso) * 28} DIAS`)
        }
    }
    getFecha3() {
        return `${this.fecha.getDate()}/${this.Mes[this.fecha.getMonth()]}/${this.fecha.getUTCFullYear()}`
    }
    getDiaFecha() {
        return `${this.dia[this.fecha.getDay()]}`
    }
}

