const tablero = document.getElementById('tablero');

// Función para crear un cuadrado
function crearCuadrado() {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.setAttribute('contenteditable', 'true');

    cuadrado.addEventListener('input', () => {
        const texto = cuadrado.textContent.toUpperCase().replace(/[^A-Z]/g, '');
        cuadrado.textContent = texto.charAt(0);

        const siguienteVisible = obtenerSiguienteVisible(cuadrado);
        if (siguienteVisible) {
            siguienteVisible.focus();
        }
    });

    tablero.appendChild(cuadrado);
}

// Función para encontrar el siguiente cuadrado visible
function obtenerSiguienteVisible(elementoActual) {
    const todosLosCuadrados = document.querySelectorAll('.cuadrado');
    const indiceActual = Array.from(todosLosCuadrados).indexOf(elementoActual);

    for (let i = indiceActual + 1; i < todosLosCuadrados.length; i++) {
        if (!todosLosCuadrados[i].classList.contains('oculto')) {
            return todosLosCuadrados[i];
        }
    }

    return null;
}

// Crear 25 cuadrados en una cuadrícula de 5x5
for (let i = 0; i < 25; i++) {
    crearCuadrado();
}

// Ocultar las celdas específicas
const cuadrados = document.querySelectorAll('.cuadrado');
cuadrados[6].classList.add('oculto');
cuadrados[7].classList.add('oculto');
cuadrados[8].classList.add('oculto');
cuadrados[11].classList.add('oculto');
cuadrados[12].classList.add('oculto');
cuadrados[13].classList.add('oculto');
cuadrados[16].classList.add('oculto');
cuadrados[17].classList.add('oculto');
cuadrados[18].classList.add('oculto');
