const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscarProductos");
const mensajeCompra = document.getElementById("mensaje-compra");

let productos = [];

// PRODUCTOS (puedes cambiarlo luego por JSON)
productos = [
    {
        id: 1,
        nombre: "Crema hidratante facial",
        categoria: "Hidratación",
        precio: "$8500",
        descripcion: "Hidrata profundamente la piel.",
        beneficios: "Suavidad y frescura.",
        imagen: "hidratante.png"
    },
    {
        id: 2,
        nombre: "Sérum vitamina C",
        categoria: "Rejuvenecimiento",
        precio: "$12000",
        descripcion: "Ilumina la piel y reduce manchas.",
        beneficios: "Piel más luminosa.",
        imagen: "serum-vitamina-c-evok.jpg"
    },
    {
        id: 3,
        nombre: "Protector solar SPF 50",
        categoria: "Protección",
        precio: "$9500",
        descripcion: "Protege contra rayos UVA y UVB.",
        beneficios: "Previene manchas.",
        imagen: "protector-solar-facial-bioactiv-fps-50-rayito-de-sol-30-g.jpg"
    }
];

function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">

            <div class="contenido">

                <span class="categoria">${producto.categoria}</span>

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <p><strong>Precio:</strong> ${producto.precio}</p>

                <a href="#" class="boton btn-comprar">
                    Comprar
                </a>

            </div>
        `;

        const boton = tarjeta.querySelector(".btn-comprar");

        boton.addEventListener("click", function(e) {
            e.preventDefault();

            mensajeCompra.textContent =
                "🛒 Compra confirmada: " + producto.nombre;

            mensajeCompra.style.display = "block";

            setTimeout(() => {
                mensajeCompra.style.display = "none";
            }, 2000);
        });

        contenedor.appendChild(tarjeta);

    });

    if (listaProductos.length === 0) {
        contenedor.innerHTML = `
            <p class="sin-resultados">No se encontraron productos.</p>
        `;
    }
}

// MOSTRAR AL INICIO
mostrarProductos(productos);

// BUSCADOR
buscador.addEventListener("input", function () {

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});
