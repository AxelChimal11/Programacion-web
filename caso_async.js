// =======================================
// EJERCICIO 1 - Simular validación usuario
// =======================================

function simularValidacion(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario validado correctamente.");
        }, 2000);
    });
}

async function verificarUsuario(){

    const area = document.getElementById("salida1");

    area.innerHTML = "Validando usuario...";
    console.log("Proceso de validación iniciado");

    const resultado = await simularValidacion();

    area.innerHTML = resultado;
    console.log("Proceso finalizado");
}



// =======================================
// EJERCICIO 2 - Obtener productos API
// =======================================

async function consultarProductos(){

    const area = document.getElementById("salida2");

    try{

        area.innerHTML = "Consultando productos...";
        console.log("Solicitando datos a la API");

        const respuesta = await fetch("https://fakestoreapi.com/products");

        const datos = await respuesta.json();

        const primerosProductos = datos.slice(0, 3);

        let html = "";

        primerosProductos.forEach(prod => {
            html += `
                <div class="producto">
                    <strong>${prod.title}</strong><br>
                    Precio: $${prod.price}
                </div>
            `;
        });

        area.innerHTML = html;
        console.log("Productos recibidos:", datos);

    }catch(error){

        area.innerHTML = "Error al obtener los productos.";
        console.error("Error:", error);

    }

}