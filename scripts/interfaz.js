import PJ from "./PJ.js";

let personaje = new PJ(); //objeto que almaacena y define el comportamiento y limites de toda la informacion relevante 

/* Funcion de carga TODO TERMINAR */
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file && file.type === 'application/json') {  // Check if the file is a JSON file
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                const jsonData = JSON.parse(e.target.result);  // Parse the JSON string into an object
                console.log("Personaje pre carga:", personaje);
                personaje.cargarJSON(jsonData);
                console.log("Personaje post carga:", personaje);

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
