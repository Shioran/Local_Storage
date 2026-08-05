# No sabía que le estaba metiendo al codigo un martes, ahi le dejo el readme y literal solo para meterme de chismoso 

# Local_Storage

Un CRUD simple de una tienda usando LocalStorage del navegador.

Descripción
-----------
Este proyecto es una tienda de ejemplo (front-end) que permite crear, leer, actualizar y eliminar productos utilizando el LocalStorage del navegador para persistencia. Está pensado como una práctica para aprender a manipular DOM, eventos y almacenamiento local con HTML y JavaScript.

Características
---------------
- Añadir productos con nombre, precio y cantidad.
- Listado dinámico de productos en pantalla.
- Editar productos existentes.
- Eliminar productos.
- Persistencia de los datos en LocalStorage para que sobrevivan a recargas.

Tecnologías
-----------
- HTML
- JavaScript (Vanilla)
- CSS mínimo (incluido en los archivos del proyecto)

Instalación y uso
-----------------
1, Git clone command execution 
2. Abre `index.html` en tu navegador (doble clic o abre con "Open File").
3. Usa el formulario para añadir productos. Los cambios se guardarán automáticamente en LocalStorage.

Estructura del proyecto
-----------------------
- index.html       -> Interfaz principal y formulario
- js/              -> Scripts JavaScript (lógica CRUD y manejo de LocalStorage)
- css/             -> Estilos (si aplica)

Notas y recomendaciones
-----------------------
- LocalStorage está limitado al navegador y al origen; los datos no se comparten entre navegadores ni dispositivos.
- Para restablecer la aplicación, puedes borrar el LocalStorage desde las herramientas de desarrollador del navegador o usar la opción de eliminar productos en la interfaz.
- Esta aplicación es solo front-end; no usa servidor ni base de datos.


