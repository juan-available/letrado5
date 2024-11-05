const tablero = document.getElementById('tablero');
const title = document.getElementById('title');

// Array para almacenar los cuadrados
const cuadrados = [];

// Función para crear un cuadrado
function crearCuadrado() {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrados.push(cuadrado);

    // Evento click para convertir a mayúsculas
    cuadrado.addEventListener('click', () => {
        cuadrado.textContent = cuadrado.textContent.toUpperCase();
    });

    // Evento keydown para capturar la entrada del usuario y pasar al siguiente cuadrado
    cuadrado.addEventListener('keydown', (event) => {
        if (event.key.match(/[A-Z]/)) {
            cuadrado.textContent = event.key.toUpperCase();

            // Obtener el índice del cuadrado actual y calcular el siguiente
            const indiceActual = cuadrados.indexOf(cuadrado);
            const siguienteIndice = indiceActual + 1;

            // Si hay un siguiente cuadrado, enfócalo
            if (siguienteIndice < cuadrados.length) {
                cuadrados[siguienteIndice].focus();
            }
        }
    });

    tablero.appendChild(cuadrado);
}

// Crear 25 cuadrados en una cuadrícula de 5x5
for (let i = 0; i < 25; i++) {
    crearCuadrado();
}
