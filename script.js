const tablero = document.getElementById('tablero');
const title = document.getElementById('title');

// Función para crear un cuadrado
function crearCuadrado() {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.addEventListener('click', () => {
        cuadrado.textContent = cuadrado.textContent.toUpperCase();
        // Aquí puedes agregar la lógica para pasar al siguiente cuadrado
    });
    tablero.appendChild(cuadrado);
}

// Crear 100 cuadrados (ajusta este número según tu diseño)
for (let i = 0; i < 25; i++) {
    crearCuadrado();
}
