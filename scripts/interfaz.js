import PJ from "./PJ.js";

let personaje = new PJ(); //objeto que almaacena y define el comportamiento y limites de toda la informacion relevante 

/* Funcion de carga TODO TERMINAR */
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file

        reader.onload = function (e) {
            // When the file is read, e.target.result contains the file content
            const jsonString = e.target.result; // Get the content of the file as a string

            try {
                // Parse the JSON string into an object
                const personajeCargado = JSON.parse(jsonString);
                console.log(personajeCargado);
                // The object is now ready to use
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        personaje.cargarJSON(personajeCargado);


    }
});

/* Boton de guardado */
document.getElementById('fileInput').addEventListener('click', function (event) {
    personaje.guardarJSON();
});
