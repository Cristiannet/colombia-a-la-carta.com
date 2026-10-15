const recetas = [
    {
        id: 1,
        nombre: "Ajiaco Santafereño",
        region: "Región Andina",
        descripcion: "Sopa tradicional bogotana con pollo, tres tipos de papa, mazorca y guascas.",
        tiempoPreparacion: 60,
        dificultad: "Media",
        categoria: "Almuerzo",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKcEH7aRv9QejnFCOnjE1jgqrBufeDNnWXgI3OdKh7A&s=10",
        calificacion: 4.9,
        ingredientes: [
            "Pechuga de pollo",
            "Papa criolla",
            "Papa pastusa",
            "Papa sabanera",
            "Mazorca",
            "Guascas",
            "Crema de leche",
            "Alcaparras"
        ],
        preparacion: [
            "Cocina la pechuga de pollo en agua con cebolla y sal hasta que esté bien cocida.",
            "Retira el pollo, desméchalo y reserva el caldo.",
            "Agrega al caldo las papas cortadas y las mazorcas en trozos.",
            "Incorpora las guascas y cocina hasta que las papas se deshagan parcialmente y espesen la sopa.",
            "Añade el pollo desmechado y cocina unos minutos más.",
            "Sirve caliente con crema de leche y alcaparras al gusto."
        ]
    },
    {
        id: 2,
        nombre: "Bandeja Paisa",
        region: "Región Andina",
        descripcion: "Plato típico antioqueño con fríjoles, arroz, carne molida, chicharrón, huevo y aguacate.",
        tiempoPreparacion: 90,
        dificultad: "Alta",
        categoria: "Almuerzo",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmK-F188MzwGHy1iKJyIR6JH_TalSJCo-X_fgg-WJ-TBU2aTqwjjEL1JUn&s=10",
        calificacion: 5.0,
        ingredientes: [
            "Fríjoles",
            "Arroz blanco",
            "Carne molida",
            "Chicharrón",
            "Huevo",
            "Arepa",
            "Aguacate",
            "Plátano maduro"
        ],
        preparacion: [
            "Remoja los fríjoles desde la noche anterior y cocínalos hasta que estén blandos.",
            "Prepara un guiso con cebolla y tomate e incorpóralo a los fríjoles.",
            "Cocina el arroz blanco y sazona la carne molida al gusto.",
            "Fríe el chicharrón hasta que esté crujiente y prepara el huevo.",
            "Fríe o asa la arepa y cocina el plátano maduro.",
            "Sirve todos los ingredientes en una bandeja junto con el aguacate."
        ]
    },
    {
        id: 3,
        nombre: "Arepas de Queso",
        region: "Región Andina",
        descripcion: "Arepas doradas, suaves y rellenas de queso derretido.",
        tiempoPreparacion: 25,
        dificultad: "Fácil",
        categoria: "Desayuno",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyQyivNiDe1UURiaKVCdMmP9VzzqyNm6O8i522HUPMA&s=10",
        calificacion: 4.8,
        ingredientes: [
            "Harina de maíz precocida",
            "Queso mozzarella",
            "Leche o agua tibia",
            "Mantequilla",
            "Sal"
        ],
        preparacion: [
            "Mezcla la harina de maíz con la leche o el agua tibia y una pizca de sal.",
            "Añade mantequilla y amasa hasta obtener una masa suave y manejable.",
            "Forma arepas redondas y rellénalas con queso.",
            "Calienta una sartén ligeramente engrasada.",
            "Asa las arepas por ambos lados hasta que estén doradas y el queso se derrita.",
            "Sirve calientes."
        ]
    },
    {
        id: 4,
        nombre: "Arroz con Coco",
        region: "Región Caribe",
        descripcion: "Acompañamiento caribeño de sabor dulce y textura especial.",
        tiempoPreparacion: 45,
        dificultad: "Media",
        categoria: "Acompañamiento",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ku0KNdSeYRtEvY2z1PjI6GLmEbIbI6l7msN_vIgC9Q&s=10",
        calificacion: 4.7,
        ingredientes: [
            "Arroz",
            "Leche de coco",
            "Agua",
            "Azúcar o panela",
            "Sal",
            "Uvas pasas (opcional)"
        ],
        preparacion: [
            "Vierte la leche de coco en una olla y cocina a fuego medio.",
            "Si buscas la versión tradicional con titoté, cocina parte de la leche hasta que se reduzca y forme pequeños sólidos dorados.",
            "Agrega el arroz y mezcla para integrar los sabores.",
            "Incorpora el agua necesaria, la sal y el azúcar o la panela al gusto.",
            "Cocina a fuego bajo hasta que el arroz absorba el líquido y esté tierno.",
            "Deja reposar unos minutos y sirve como acompañamiento."
        ]
    },
    {
        id: 5,
        nombre: "Sancocho de Gallina",
        region: "Región Pacífica",
        descripcion: "Caldo tradicional con gallina, yuca, plátano, papa y mazorca.",
        tiempoPreparacion: 120,
        dificultad: "Alta",
        categoria: "Almuerzo",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBVFUjBmYRtcrx5xP5-YIDdBktTkty1bWvW3uZspbkA&s=10",
        calificacion: 4.9,
        ingredientes: [
            "Gallina",
            "Yuca",
            "Plátano verde",
            "Papa",
            "Mazorca",
            "Cebolla larga",
            "Cilantro"
        ],
        preparacion: [
            "Lava la gallina y ponla a cocinar en una olla con agua, cebolla y sal.",
            "Cocina hasta que empiece a ablandarse; la gallina puede requerir más tiempo según su edad.",
            "Agrega el plátano verde y las mazorcas en trozos.",
            "Incorpora la yuca y la papa, y cocina hasta que todos los ingredientes estén blandos.",
            "Rectifica la sal y añade cilantro picado.",
            "Sirve caliente, acompañado de arroz y ají si lo deseas."
        ]
    },
    {
        id: 6,
        nombre: "Empanadas Colombianas",
        region: "Varias regiones",
        descripcion: "Empanadas crujientes de maíz rellenas de papa y carne, acompañadas de ají.",
        tiempoPreparacion: 50,
        dificultad: "Media",
        categoria: "Entrada",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbB-dRGxjHvPFet8H6Z3cEycmaWATd8D6Izc6NhKgxA&s=10",
        calificacion: 4.8,
        ingredientes: [
            "Harina de maíz amarillo",
            "Carne molida o desmechada",
            "Papa",
            "Cebolla",
            "Tomate",
            "Comino",
            "Aceite",
            "Ají para acompañar"
        ],
        preparacion: [
            "Cocina las papas, aplástalas y reserva.",
            "Prepara un guiso con cebolla, tomate, carne y comino.",
            "Mezcla la papa con el guiso para preparar el relleno.",
            "Prepara la masa con harina de maíz, agua y sal hasta que sea manejable.",
            "Forma círculos de masa, agrega el relleno y dobla para cerrar las empanadas.",
            "Fríe en aceite caliente hasta que estén doradas y crujientes.",
            "Escurre el exceso de aceite y sirve con ají casero."
        ]
    }
];


const receta = document.getElementById("receta");

let html = "";

for (const producto of recetas) {
    html += `
        <li class="producto">
            
            <div class="contenido-receta">
                <h3>${producto.nombre}</h3>

                <img
                src="${producto.imagen}"
                alt="Fotografía de ${producto.nombre}"
                class="imagen-receta"
                >

                <p>${producto.descripcion}</p>

                <p>
                    <strong>Dificultad:</strong>
                    ${producto.dificultad}
                </p>

                <p>
                    <strong>Tiempo:</strong>
                    ${producto.tiempoPreparacion} minutos
                </p>

                <div>
                    <strong>Ingredientes:</strong>
                    <ul>
                        ${producto.ingredientes.map(ingrediente => `
                            <li>${ingrediente}</li>
                        `).join("")}
                    </ul>
                </div>
                                <details class="preparacion">
                    <summary>Ver preparación</summary>
                    <ol>
                        ${producto.preparacion.map(paso => `
                            <li>${paso}</li>
                        `).join("")}
                    </ol>
                </details>
            </div>
        </li>
    `;
}

receta.innerHTML = html;
