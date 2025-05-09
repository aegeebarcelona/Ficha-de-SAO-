import Modificador from "./modificador.js";
export default class Equipamiento {

    /**
     * 
     * @param {Stringn} nombre 
     * @param {Stringn} descripcion 
     * @param {Array[Modifcador]} modificadores 
     * @param {Enum} tipo denota si es arma, armadura u accesorio ['Arma','Ligera','Media','Pesada','Escudo','Accesorio']
     */
    constructor(nombre, descripcion, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modificadores = [new Modificador("Mod Base", "atletismo", "0", "-1")];
        this.tipo = this.setTipo(tipo);
    }

    setTipo(tipo) {
        let arrayTiposValidos = ['Arma', 'Ligera', 'Media', 'Pesada', 'Escudo', 'Accesorio'];

        if (!arrayTiposValidos.includes(tipo)) {
            throw new (" Tipo debe ser un valor valido: \n", arrayTiposValidos);
        }
        this.tipo = tipo;
    }

    toJSONString() {
        let array = [];
        this.modificadores.forEach((mod) => {
            array.push(new Modificador(mod.nombre, mod.modificado, mod.numero, mod.turnos))
        })

        return JSON.stringify({
            nombre: this.nombre,
            descripcion: this.modificado,
            modificadores: array,
            tipo: this.tipo,
        })
    }
}