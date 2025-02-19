export default  class Modificador {
    /**
     * 
     * @param {String} nombre 
     * @param {String} modificado nombre del atributo modificado de la clase Personaje, 
     * @param {Int} numero numero a sumar o restar 
     * @param {Int} turnos turnos durante los que se aplica, en caso de ser -1 es permanente
     */
    constructor(nombre, modificado, numero, turnos) { 
        this.nombre =nombre;
        this.modificado = modificado;
        this.numero = numero;
        this.turnos = turnos;
    }

}