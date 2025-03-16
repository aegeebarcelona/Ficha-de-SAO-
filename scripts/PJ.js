export default class PJ {
    constructor() {
        /* caracteristicas base */
        this.nombre = "nombre"; //String
        this.nivel = 15;
        this.experiencia = 0;

        /* Caracteristicas */
        this.fortaleza = 4;
        this.reflejos = 4;
        this.voluntad = 4;
        this.inteligencia = 4;

        /* Habilidades */
        this.atletismo = 0;
        this.combate = 0;
        this.percepcion = 0;
        this.subterfugio = 0;
        this.comunicacion = 0;
        this.cultura = 0;
        this.profesion = 0;
        this.sacro = 0;

        /*Atributos  */
        this.puntosArteMax = 3;
        this.puntosArte = 0;
        this.vidaMax = 1;
        this.vida = 1;
        this.aguante = 1;
        this.armadura = 1;
        this.defensa = 1;
        this.dFisico = 1;
        this.dDistancia = 1;
        this.dMagico = 1;
        this.iniciativa = 1;

        /* Acciones */
        this.izquierda = true; //Boolean
        this.derecha = true; //Boolean
        this.cabeza = true; //Boolean
        this.pies = true; //Boolean

        /* Array de modificaciones */
        this.modificaciones;

        /* Equipamiento */ /* Se creará una clase equipamiento? */
        this.armadura; /* Todos estos son objetos de tipo equipamiento */
        this.manoDerecha;
        this.manoIzquierda;
        this.accesorios;

        this.puntosArteMax = this.puntosArteMax;
        this.puntosArte = this.puntosArte;
        this.espaciosArte = this.espaciosArte;
        this.aguante = this.fortaleza + (this.voluntad / 2);
        this.vidaMax = this.aguante * ((this.nivel / 5) + 1);
        this.vida = this.vidaMax;
        this.armadura = this.getModificador("armadura");
        this.defensa = (5);
        this.dFisico = (this.combate + this.fortaleza) / 4;
        this.dDistancia = (this.combate) / 4;
        this.dMagico = (this.sacro + this.inteligencia) / 4;
        this.iniciativa = (this.reflejos + this.voluntad / 2);
        this.vMovimiento = 3 + this.atletismo / 5;

        /* Bloques de texto */
        this.notas = "vacio"; /* String, como todos  */
        this.listadoArtes = "vacio";
        this.listaDeAmigos = "vacio";
        this.recetasProfesion = "vacio";
        this.baul = "vacio";

        /* Modificadores */
        this.modificaciones = [];

    }

    /* Setters */
    setExp(experiencia) {
        if (typeof (experiencia) != 'number') {
            throw TypeError("El valor de experiencia tiene que ser numerico.")
        }
        this.experiencia = experiencia;

        while (this.experiencia > this.nivel * 100) {
            this.experiencia -= this.nivel * 100;
            this.nivel += 1;
        }
    }

    calcularCaracteristicas() {
        this.puntosArteMax = 3 + (this.nivel > 30 ? Math.floor((this.nivel - 16) / 15) : 0) + this.getModificador("arte");
        this.espaciosArte = 4 + Math.floor(this.cultura / 10) + this.getModificador("espacios");
        this.aguante = this.fortaleza + (this.voluntad / 2) + this.getModificador("aguante");;
        this.vidaMax = this.aguante * (Math.floor((this.nivel - 1) / 5) + 1) + this.getModificador("vidaMax");;
        this.armadura = this.getModificador("armadura");
        this.defensa = (5 + this.reflejos) + this.getGenerico("atletismo") + this.getModificador("defensa");;
        this.dFisico = (this.getGenerico("combate") + this.fortaleza) / 4 + this.getModificador("dFisico");
        this.dDistancia = (this.getGenerico("combate")) / 4 + this.getModificador("dDistancia");;
        this.dMagico = (this.getGenerico("sacro") + this.inteligencia) / 4 + this.getModificador("dMagico");;
        this.iniciativa = (this.reflejos + this.voluntad / 2) + this.getModificador("iniciativa");;
        this.vMovimiento = 3 + Math.floor(this.getGenerico("atletismo") / 5) + this.getModificador("vMovimeinto");;
    }

    toJSONString() {
        this.calcularCaracteristicas();
        return JSON.stringify({
            nombre: this.nombre,
            nivel: this.nivel,
            experiencia: this.experiencia,

            fortaleza: this.fortaleza,
            reflejos: this.reflejos,
            voluntad: this.voluntad,
            inteligencia: this.inteligencia,

            atletismo: this.atletismo,
            combate: this.combate,
            percepcion: this.percepcion,
            subterfugio: this.subterfugio,
            comunicacion: this.comunicacion,
            cultura: this.cultura,
            profesion: this.profesion,
            sacro: this.sacro,

            puntosArteMax: this.puntosArteMax,
            puntosArte: this.puntosArte,
            espaciosArte: this.espaciosArte,
            aguante: this.aguante,
            vidaMax: this.vidaMax,
            vida: this.vidaMax,
            armadura: this.getModificador("armadura"),
            defensa: this.defensa,
            dFisico: this.dFisico,
            dDistancia: this.dDistancia,
            dMagico: this.dMagico,
            iniciativa: this.iniciativa,
            vMovimiento: this.vMovimiento,

            izquierda: this.izquierda,
            derecha: this.derecha,
            cabeza: this.cabeza,
            pies: this.pies,

            /* Bloques de texto */
            notas: this.notas = "vacio",/* String, como todos  */
            listadoArtes: this.listadoArtes = "vacio",
            listaDeAmigos: this.listaDeAmigos = "vacio",
            recetasProfesion : this.recetasProfesion = "vacio",
            baul: this.baul = "vacio",

            modificaciones: this.modificaciones
        });
    }

    /**
     * Introduce el nombre del atributo a obtener y se unen automaticamente los modificadores asociados al nombre 
     * @param {string} atributo 
     */
    getGenerico(atributo) {
        console.log(atributo + ":" + this[atributo])
        return parseInt(this[atributo]) + parseInt(this.getModificador(atributo));
    }

    /**
     * Devuelve la suma de todos los modificadores de el atributo nombrado. 
     * 
     * @param {string} atributo nombre de alguno de los atributos de PJ 
     * @returns Int de la suma
     */
    getModificador(atributo) {
        /* Del array de modificadores del personaje, saca la suma de los valores enteros del nombre del atributo  */
        return 0;
        /*  return this.modificaciones.reduce(function (acc, obj) { 
             return acc + ((obj['modificado']== atributo)?obj.numero:0); 
         },0); */
    }

    guardarJSON() {
        let hoy = new Date();
        const blob = new Blob([this.toJSONString()], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = this.nombre + hoy.toLocaleDateString() + '.json';
        link.click();
    }

    cargarJSON(jsonObject) {
        /* Valores principales */
        this.nombre = jsonObject.nombre;
        this.nivel = jsonObject.nivel;
        this.experiencia = jsonObject.experiencia;

        /* Atributos */
        this.fortaleza = jsonObject.fortaleza;
        this.reflejos = jsonObject.reflejos;
        this.voluntad = jsonObject.voluntad;
        this.inteligencia = jsonObject.inteligencia;

        /* Habilidades */
        this.atletismo = jsonObject.atletismo;
        this.combate = jsonObject.combate;
        this.percepcion = jsonObject.percepcion;
        this.subterfugio = jsonObject.subterfugio;
        this.comunicacion = jsonObject.comunicacion;
        this.cultura = jsonObject.cultura;
        this.profesion = jsonObject.profesion;
        this.sacro = jsonObject.sacro;

        /* Estadisticas */
        this.puntosArte = jsonObject.puntosArte;
        this.vida = jsonObject.vida;
        this.aguante = jsonObject.aguante;
        this.armadura = jsonObject.armadura;
        this.defensa = jsonObject.defensa;
        this.dFisico = jsonObject.dFisico;
        this.dDistancia = jsonObject.dDistancia;
        this.dMagico = jsonObject.dMagico;
        this.iniciativa = jsonObject.iniciativa;
        this.vMovimiento = jsonObject.vMovimiento;

        /* Acciones */
        this.izquierda = jsonObject.izquierda;
        this.derecha = jsonObject.derecha;
        this.cabeza = jsonObject.cabeza;
        this.pies = jsonObject.pies;

        /* Modifciaciones */
        this.modificaciones = jsonObject.modificaciones;

    }

}


