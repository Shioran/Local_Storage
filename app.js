let nombre = document.getElementById("nomPro");
let precio = document.getElementById("precioPro");
let cantidad = document.getElementById("cantidadPro");
let imagen = document.getElementById("imagenPro");
let btnGuardar = document.querySelector(".btnGuardar")
let tabla = document.querySelector(".table > tbody")

//agregarle un evento al boton
btnGuardar.addEventListener("click", function () {
    let pro = validForm();

    if (pro) {
        saveProduct(pro);
        tabla.innerHTML = "";   // limpiar tbody
        getProducts();
        console.log("producto", pro);
    }

});

//obetner y validar
function validForm(){
    let producto;
    if(nombre.value && precio.value && cantidad.value){
       // alert("formulario completado")
        producto={
            "nombre":nombre.value,
            "precio":precio.value,
            "cantidad":cantidad.value,
            "imagen":imagen.value
        }
        nombre.value = "";
        precio.value = "";
        cantidad.value = "";
        imagen.value = "";
    }else{
        alert("faltan campos obligatorios")
    }
    return producto;
}

//guardar en localstorage
function saveProduct(product){
    //console.log(product)
    let productPrevius = JSON.parse(localStorage.getItem("lista-pro")) || [];
    productPrevius.push(product);
    console.log(productPrevius)
    localStorage.setItem("lista-pro", JSON.stringify(productPrevius));
    alert("producto guardado con exito 👍")
}

function getProducts(){
    console.log("Entré a getProducts");
    let productPrevius = JSON.parse(localStorage.getItem("lista-pro")) || [];
    if (productPrevius != null) {
        productos = productPrevius;
    }

    productPrevius.forEach((pro , i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${i + 1}</td>
        <td>${pro.nombre}</td>
        <td>${pro.precio}</td>
        <td>${pro.cantidad}</td>
        <td> <img src="${pro.imagen}" width="100px" height="100px"></td>
        <td>
            <span class="btn btn-danger" onclick="deleteProduct(${i})">Eliminar</span>
            <span class="btn btn-warning" onclick="editProduct(${i})">Editar</span>
        </td>
        `;
        tabla.appendChild(fila);
});
}
document.addEventListener("DOMContentLoaded", function () {
    getProducts();
})
