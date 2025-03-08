import PJ from "./PJ.js";

let personaje = new PJ(); //objeto que almaacena y define el comportamiento y limites de toda la informacion relevante 
/* Informacion */
let inputNombre = document.getElementById("nombre");
let inputNivel = document.getElementById("nivel");
let inputExperiencia = document.getElementById("experiencia");
let inputVida = document.getElementById("vidaInp");
let vidaMaxSpan = document.getElementById("vidaMax");
let arteInp = document.getElementById("arteInp");
let arteSpan = document.getElementById("arteMax");
/* Elementos Atributos */
let spanFortaleza = document.getElementById("cantFortaleza");
let spanReflejos = document.getElementById("cantReflejos");
let spanVoluntad = document.getElementById("cantVoluntad");
let spanMente = document.getElementById("cantMente");
/* Elementos habilidades */
let atletismoInp = document.getElementById("atletismoInp")
let combateInp = document.getElementById("combateInp")
let percepcionInp = document.getElementById("percepcionInp")
let sigiloInp = document.getElementById("sigiloInp")
let carismaInp = document.getElementById("carismaInp")
let culturaInp = document.getElementById("culturaInp")
let profesionInp = document.getElementById("profesionInp")
let sacroInp = document.getElementById("sacroInp")
/* Caracteristicas */
let cantAguante = document.getElementById("cantAguante");
let cantEntreza = document.getElementById("cantEntreza");
let cantDefensa = document.getElementById("cantDefensa");
let cantIniciativa = document.getElementById("cantIniciativa");
let cantMovimiento = document.getElementById("cantMovimiento");
let cantDannoCac = document.getElementById("cantCac");
let cantDannoDist = document.getElementById("cantDistancia");
let cantDannoMagic = document.getElementById("cantMagico");


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
