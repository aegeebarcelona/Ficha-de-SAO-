export default class Modificador {
    /**
     * 
     * @param {String} nombre 
     * @param {String} modificado nombre del atributo modificado de la clase Personaje, 
     * @param {Int} numero numero a sumar o restar 
     * @param {Int} turnos turnos durante los que se aplica, en caso de ser -1 es permanente
     */
    constructor(nombre = 'nombre', modificado = 'atletismo', numero = 0, turnos = 0) {
        this.nombre = nombre;
        this.modificado = modificado;
        this.numero = numero;
        this.turnos = turnos;
    }


    toJSONString() {
        return JSON.stringify({
            nombre: this.nombre,
            modificado: this.modificado,
            numero: this.numero,
            turnos: this.turnos,
        })
    }


}