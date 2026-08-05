let nombre = document.getElementById("nomPro");
let precio = document.getElementById("precioPro");
let cantidad = document.getElementById("cantidadPro");
let imagen = document.getElementById("imagenPro");
let btnGuardar = document.querySelector(".btnGuardar")

//agregarle un evento al boton
btnGuardar.addEventListener("click",function(){
    let pro=validForm();
    saveProduct(pro);
    console.log("producto",pro)

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