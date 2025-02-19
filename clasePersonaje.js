class PJ {
    constructor() {
        /* caracteristicas base */
        this.nombre; //String
        this.nivel;
        this.experiencia;

        /* Caracteristicas */
        this.fortaleza;
        this.reflejos;
        this.voluntad;
        this.inteligencia;

        /* Habilidades */
        this.atletismo;
        this.combate;
        this.percepcion;
        this.subterfugio;
        this.comunicacion;
        this.cultura;
        this.profesion;
        this.sacro;

        /*Atributos  */
        this.puntosArte;
        this.vida;
        this.aguante;
        this.armadura;
        this.defensa;
        this.dFisico;
        this.dDistancia;
        this.dMagico;
        this.iniciativa;

        /* Acciones */
        this.izquierda; //Boolean
        this.derecha; //Boolean
        this.cabeza; //Boolean
        this.pies; //Boolean

        /* Array de modificaciones */
        this.modificaciones;

        /* Equipamiento */
        this.armadura; /* Todos estos son objetos de tipo equipamiento */
        this.manoDerecha;
        this.manoIzquierda;
        this.accesorios;

        /* Bloques de texto */
        this.notas; /* String, como todos  */
        this.listadoArtes;  
        this.listaDeAmigos;  
        this.recetasProfesion;
        this.baul;

    }

    toJSON() {
        return {
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
            izquierda: this.izquierda,
            derecha: this.derecha,
            cabeza: this.cabeza,
            pies: this.pies,
            modificaciones: this.modificaciones
        };
    }
}


