// Solicitar al usuario que ingrese su nombre
var nombre = prompt("Por favor, ingresa tu nombre:");

// Verificar si el nombre es "Santino" o "Nahuel"
if (nombre === "Santino") {
    alert("¡Hola Santino! Bienvenido de vuelta.");
} else if (nombre === "Nahuel") {
    alert("¡Hola Nahuel! Qué gusto verte por aquí.");
} else {
    alert("¡Hola " + nombre + "! Bienvenido.");
}


function categorizarNota(calificacion) {
    if (calificacion >= 80 && calificacion <= 100) {
        return "MS (Muy Satisfactorio)";
    } else if (calificacion >= 60 && calificacion < 80) {
        return "S (Satisfactorio)";
    } else {
        return "EP (Espera de Progreso)";
    }
}

// Ejemplo de uso:
var calificacion = 75;
var categoria = categorizarNota(calificacion);
console.log("Para la calificación", calificacion, "la categoría de nota es:", categoria);

// Obtener referencia al botón y al párrafo
const doubleClickButton = document.getElementById('doubleClickButton');
const doubleClickCount = document.getElementById('doubleClickCount');



let clickCounter = 0;
    let clickCountDisplay = document.getElementById("count");
    let clickButton = document.getElementById("clickButton");

    function countClicks() {
        clickCounter++;
        clickCountDisplay.textContent = clickCounter;

        if (clickCounter % 10 === 0) {
            changeBackgroundColor();
        }

        if (clickCounter >= 50) {
            alert("¡Felicidades! Has llegado a 50 clics.");
            clickCounter = 0;
            clickCountDisplay.textContent = clickCounter;
            clickButton.style.backgroundColor = "#4CAF50"; // Restablecer el color de fondo a verde
        }
    }

    function changeBackgroundColor() {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generar un color aleatorio
        clickButton.style.backgroundColor = randomColor;
    }


    

