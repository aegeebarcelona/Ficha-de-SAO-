import Equipamiento from "./equipamiento.js";
import Modificador from "./modificador.js";
import PJ from "./PJ.js";

let personaje = new PJ(); //objeto que almaacena y define el comportamiento y limites de toda la informacion relevante
/* Informacion */
let inputNombre = document.getElementById("nombre");
let inputNivel = document.getElementById("nivel");
let inputExperiencia = document.getElementById("experiencia");
let inputVida = document.getElementById("vida");
let vidaMaxSpan = document.getElementById("vidaMax");
let arteInp = document.getElementById("arte");
let arteSpan = document.getElementById("arteMax");

/* Elementos Atributos */
let spanFortaleza = document.getElementById("fortaleza");
let spanReflejos = document.getElementById("reflejos");
let spanVoluntad = document.getElementById("voluntad");
let spanMente = document.getElementById("inteligencia");

/* Elementos habilidades */
let atletismoInp = document.getElementById("atletismo")
let combateInp = document.getElementById("combate")
let percepcionInp = document.getElementById("percepcion")
let sigiloInp = document.getElementById("subterfugio")
let carismaInp = document.getElementById("comunicacion")
let culturaInp = document.getElementById("cultura")
let profesionInp = document.getElementById("profesion")
let sacroInp = document.getElementById("sacro")

/* Caracteristicas */
let cantAguante = document.getElementById("aguante");
let cantDefensa = document.getElementById("defensa");
let cantIniciativa = document.getElementById("iniciativa");
let cantMovimiento = document.getElementById("vMovimiento");
let cantDannoCac = document.getElementById("dFisico");
let cantDannoDist = document.getElementById("dDistancia");
let cantDannoMagic = document.getElementById("dMagico");

let inputs = document.getElementsByTagName("input");

/* Evento generico que introduce nuevos valores en el atributo del objeto personaje dependiendo del id del input que lo contiene */
for (const element of inputs) {
    element.addEventListener('focusout', () => {
        personaje[element.id] = element.value;
        personaje.calcularCaracteristicas();
        actualizarTodo();
    })
}

/* Introduccion de datos en textareas y manejo general */
let textareas = document.getElementsByTagName("textarea");
for (const textarea of textareas) {
    textarea.addEventListener('focusout', function (event) {
        personaje[textarea.id] = event.target.value
        console.log(personaje[textarea.id])
    }
    )
}

function actualizarTodo() {
    actualizarInformacion();
    actualizarAtributos();
    actualizarHabilidades();
    actualizarCaracteristicas();
    actuaizarTextos();
}

function actualizarInformacion() {
    inputNombre.value = personaje.nombre;
    inputNivel.value = personaje.nivel;
    inputExperiencia.value = personaje.experiencia;
    inputVida.value = personaje.vida;
    vidaMaxSpan.innerHTML = personaje.vidaMax;
    arteInp.value = personaje.puntosArte;
    arteSpan.innerHTML = personaje.puntosArteMax;
}

function actualizarAtributos() {
    spanFortaleza.innerHTML = personaje.fortaleza;
    spanReflejos.innerHTML = personaje.reflejos;
    spanVoluntad.innerHTML = personaje.voluntad;
    spanMente.innerHTML = personaje.inteligencia;
}

function actualizarHabilidades() {
    atletismoInp.value = personaje.atletismo;
    combateInp.value = personaje.combate;
    percepcionInp.value = personaje.percepcion;
    sigiloInp.value = personaje.subterfugio;
    carismaInp.value = personaje.comunicacion;
    culturaInp.value = personaje.cultura;
    profesionInp.value = personaje.profesion;
    sacroInp.value = personaje.sacro;
}

function actuaizarTextos() {
    for (const textarea of textareas) {
        textarea.value = personaje[textarea.id];
    }
}

function actualizarCaracteristicas() {
    cantAguante.innerHTML = personaje.aguante;
    cantDefensa.innerHTML = personaje.defensa;
    cantIniciativa.innerHTML = personaje.iniciativa;
    cantMovimiento.innerHTML = personaje.vMovimiento;
    cantDannoCac.innerHTML = personaje.dFisico;
    cantDannoDist.innerHTML = personaje.dDistancia;
    cantDannoMagic.innerHTML = personaje.dMagico;
}

/* Funcion de carga TODO TERMINAR */
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file && file.type === 'application/json') {  // Check if the file is a JSON file
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                const jsonData = JSON.parse(e.target.result);  // Parse the JSON string into an object
                personaje.cargarJSON(jsonData);
                actualizarTodo();
                parseModificadores();

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        reader.onerror = function () {
            console.error('Error reading file');
        };

        reader.readAsText(file);  // Read the file as a text string
    } else {
        alert('Elije un archivo adecuado');
    }
});

/* Boton de guardado */
document.getElementById('botonGuardar').addEventListener('click', function (event) {
    personaje.guardarJSON();
});

/* Funcion */
for (const elemento of document.getElementsByClassName("equipamiento")) {
    personaje[elemento.classList[0]].modificadores.push(new Modificador());

    let elementoModificadores = elemento.getElementsByClassName("modificadoresEquipo");
    elemento.getElementsByTagName("button")[0].addEventListener("click", () => {


    })
}

/* Modificadores */
let listadoModificadores = document.getElementById("listadoModificadores")
let botonAnnadir = document.getElementById("anadirMod");
console.log("boton añadir", botonAnnadir)
botonAnnadir.addEventListener('click', function () {
    personaje.modificadores.push(new Modificador("nombre", "atletismo", 0, 0))
    parseModificadores();
})

function parseModificadores() {
    listadoModificadores.innerHTML = "";
    personaje.modificadores.forEach((modificador, index) => {
        listadoModificadores.innerHTML += ` 
                <div id="modificador${index}" class="modificador">
                    Modificador: <input type="text" class="" value="${modificador.nombre}"> Atributo: <select class="listValores"> 
                        <option value="atletismo">Atletismo</option>
                        <option value="combate">Combate</option>
                        <option value="percepcion">Percepción</option>
                        <option value="subterfugio">Sigilo</option>
                        <option value="comunicacion">Carisma</option>
                        <option value="cutlura">Cultura</option>
                        <option value="profesion">Profesion</option>
                        <option value="sacro">Sacro</option>
                    </select> 
                    Cantidad:
                    <input type="number"  class="cantidadMod" value="${modificador.numero}"/> 
                    Duracion: <input  class="duracionMod" value="${modificador.turnos}"/>
                    <div class="eliminarMod">-</div>
                </div>`;
    });

    for (const modificador of document.getElementsByClassName("modificador")) {
        let index = modificador.id.substring(11);
        modificador.children[0].addEventListener('focusout', (evt) => {
            personaje.modificadores[index].nombre = evt.currentTarget.value;
            console.log(personaje.modificadores);
        })
        modificador.children[1].addEventListener('focusout', (evt) => {
            personaje.modificadores[index].modificado = evt.currentTarget.value;
            console.log(personaje.modificadores);
        })
        modificador.children[2].addEventListener('focusout', (evt) => {
            personaje.modificadores[index].numero = parseInt(evt.currentTarget.value);
            personaje.calcularCaracteristicas();
            console.log(personaje.modificadores);
            actualizarTodo();//cuando se cambia el numero el valor numerico ded algo puede variar.
        })
        modificador.children[3].addEventListener('focusout', (evt) => {
            personaje.modificadores[index].turnos = parseInt(evt.currentTarget.value);
            personaje.calcularCaracteristicas();
            actualizarTodo();//puede que haya desaparecido un modificador por lo que hay que recalcular
        })

        modificador.children[4].addEventListener('click', (evt) => {
            personaje.modificadores.splice(index, 1);
            personaje.calcularCaracteristicas();
            parseModificadores();
            console.log(personaje.modificadores);
            actualizarTodo();//cuando se cambia el numero el valor numerico ded algo puede variar.
        })

    }
}

document.addEventListener("DOMContentLoaded", () => {
    parseModificadores();
    actualizarTodo();
})