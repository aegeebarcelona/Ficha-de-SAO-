export default class PJ {
    constructor() {
        /* caracteristicas base */
        this.nombre = "nombre"; //String
        this.nivel = 15;
        this.experiencia = 0;

        /* Caracteristicas */
        this.fortaleza = 1;
        this.reflejos = 1;
        this.voluntad = 1;
        this.inteligencia = 1;

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

        /* Bloques de texto */
        this.notas = "vacio"; /* String, como todos  */
        this.listadoArtes = "vacio";
        this.listaDeAmigos = "vacio";
        this.recetasProfesion = "vacio";
        this.baul = "vacio";

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

    setFortaleza


    toJSONString() {
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

            puntosArte: this.puntosArte,
            vida: this.vida,
            aguante: this.aguante,
            armadura: this.armadura,
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

            modificaciones: this.modificaciones
        });
    }

    guardarJSON() {
        const blob = new Blob([this.toJSONString()], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = this.nombre + '.json';
        link.click();
    }

    cargarJSON(jsonObject) {
        /* Valores principales */
        this.nombre = jsonObject.nombre;
        this.nivel = jsonObject.nivel,
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


