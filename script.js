const tablero = document.getElementById('tablero');

// Función para crear un cuadrado
function crearCuadrado() {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.setAttribute('contenteditable', 'true');

    cuadrado.addEventListener('input', () => {
        // Convertir el texto a mayúsculas y limitar a un carácter
        const texto = cuadrado.textContent.toUpperCase().replace(/[^A-Z]/g, '');
        cuadrado.textContent = texto.charAt(0);

        // Encontrar el siguiente cuadrado
        const cuadrados = tablero.querySelectorAll('.cuadrado');
        const indiceActual = Array.from(cuadrados).indexOf(cuadrado);
        const siguienteIndice = indiceActual + 1;

        // Si hay un siguiente cuadrado, enfócalo
        if (siguienteIndice < cuadrados.length) {
            cuadrados[siguienteIndice].focus();
        }
    });

    tablero.appendChild(cuadrado);
}

// Crear 25 cuadrados en una cuadrícula de 5x5
for (let i = 0; i < 25; i++) {
    crearCuadrado();
}
