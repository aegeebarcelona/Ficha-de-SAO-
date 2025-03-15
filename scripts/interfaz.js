import PJ from "./PJ.js";

let personaje = new PJ(); //objeto que almaacena y define el comportamiento y limites de toda la informacion relevante
console.log(personaje); 
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
let cantEntreza = document.getElementById("entreza");
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



function actualizarTodo() {
    actualizarInformacion();
    actualizarAtributos();
    actualizarHabilidades();
    actualizarCaracteristicas();
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

function añadirModificadores() {


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

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        reader.onerror = function () {
            console.error('Error reading file');
        };

        reader.readAsText(file);  // Read the file as a text string
    } else {
        alert('Please select a valid JSON file.');
    }
});

/* Boton de guardado */
document.getElementById('botonGuardar').addEventListener('click', function (event) {
    personaje.guardarJSON();
});
