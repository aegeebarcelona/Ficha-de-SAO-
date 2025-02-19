class equipamiento {

    arrayTiposValidos = ['Arma', 'Ligera', 'Media', 'Pesada', 'Escudo', 'Accesorio'];

    /**
     * 
     * @param {Stringn} nombre 
     * @param {Stringn} descripcion 
     * @param {Array[Modifcador]} modificadores 
     * @param {Enum} tipo denota si es arma, armadura u accesorio ['Arma','Ligera','Media','Pesada','Escudo','Accesorio']
     */
    constructor(nombre, descripcion, modificadores, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modificadores = modificadores;
        this.tipo = this.setTipo(tipo);
    }

    setTipo(tipo) {
        if (!arrayTiposValidos.includes(tipo)) {
            throw new TypeError(" Tipo debe ser un valor valido: \n", arrayTiposValidos);
        }
        this.tipo = tipo;
    }
}