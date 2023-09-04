document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencia a los elementos HTML relevantes
    const categorias = document.querySelectorAll('input[type="radio"]');
    const plantasContainer = document.getElementById("plantas-container");

    // Define un objeto que mapea las categorías a los datos de las plantas
    const datosPlantas = {
        interior: [
            { nombre: "Planta 1 (Interior)", imagen: "imagenes/planta1.jpg", pdf: "info/planta1.pdf" },
            { nombre: "Planta 2 (Interior)", imagen: "imagenes/planta2.jpg", pdf: "info/planta2.pdf" },
            { nombre: "Planta 5 (Interior)", imagen: "imagenes/planta5.jpg", pdf: "info/planta5.pdf" }
            // Agrega más plantas de interior si es necesario
        ],
        exterior: [
            { nombre: "Planta 3 (Exterior)", imagen: "imagenes/planta3.jpg", pdf: "info/planta3.pdf" },
            { nombre: "Planta 4 (Exterior)", imagen: "imagenes/planta4.jpg", pdf: "info/planta4.pdf" },
            { nombre: "Planta 6 (Exterior)", imagen: "imagenes/planta6.jpg", pdf: "info/planta6.pdf" }
            // Agrega más plantas de exterior si es necesario
        ]
    };

    // Función para mostrar las plantas asociadas a la categoría seleccionada
    function mostrarPlantas(categoria) {
        const plantas = datosPlantas[categoria];
        if (!plantas) {
            return;
        }

        // Genera el contenido HTML para mostrar las plantas
        const contenidoHTML = plantas.map(planta => `
            <div class="planta">
                <img src="${planta.imagen}" alt="${planta.nombre}">
                <a href="${planta.pdf}" target="_blank">Información PDF</a>
            </div>
        `).join("");

        // Actualiza el contenido del contenedor de plantas
        plantasContainer.innerHTML = contenidoHTML;
    }

    // Evento para manejar cambios en la selección de categoría
    categorias.forEach(categoria => {
        categoria.addEventListener("change", function () {
            const categoriaSeleccionada = document.querySelector('input[name="categoria"]:checked').value;
            mostrarPlantas(categoriaSeleccionada);
        });
    });

    // Inicialmente, muestra las plantas de la categoría seleccionada por defecto (Interior)
    mostrarPlantas("interior");
});
