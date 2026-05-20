const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscarProductos");

let productos = [];

// CARGAR JSON (opcional si usas productos.json)
fetch("productos.json")
.then(res => res.json())
.then(data => {
    productos = data;
    mostrarProductos(productos);
});

function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">

            <div class="contenido">

                <span class="categoria">
                    ${producto.categoria}
                </span>

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

            alert(
                "🛒 Agregado al carrito\n\n" +
                "Producto: " + producto.nombre + "\n" +
                "Precio: " + producto.precio
            );
        });

        contenedor.appendChild(tarjeta);

    });

    if (listaProductos.length === 0) {
        contenedor.innerHTML = `
            <p class="sin-resultados">No se encontraron productos.</p>
        `;
    }
}

// BUSCADOR
buscador.addEventListener("input", function() {

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);

});