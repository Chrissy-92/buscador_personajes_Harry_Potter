# ⚡ Harry Potter Character Explorer ⚡

Una aplicación web interactiva que permite explorar el vasto mundo de los personajes de Harry Potter. Puedes buscar personajes por su nombre, filtrar por su casa de Hogwarts y ver detalles completos de cada uno. Desarrollada con React para una experiencia de usuario fluida y dinámica.

🚀 Funcionalidades Principales
Este proyecto ha sido diseñado para ofrecer una experiencia de navegación sencilla y eficiente a través del listado de personajes de Harry Potter, incorporando las siguientes características:

1. Listado Completo de Personajes
   Al cargar la aplicación, se presenta un listado de todos los personajes de Harry Potter obtenidos desde la API de https://hp-api.onrender.com/api/characters. Cada tarjeta de personaje muestra:

Foto: La imagen oficial del personaje. En caso de que el personaje no tenga una imagen disponible en la API, se mostrará una imagen de relleno predeterminada para asegurar una visualización consistente.
Nombre: El nombre completo del personaje.
Especie: La especie a la que pertenece el personaje (humano, elfo, etc.). 2. Filtrado Dinámico por Nombre
Incorpora un campo de búsqueda (<input>) que permite a los usuarios filtrar el listado de personajes en tiempo real. A medida que se escribe, solo se mostrarán los personajes cuyos nombres contengan las letras introducidas, facilitando la localización de personajes específicos.

3. Filtrado por Casa de Hogwarts
   Se ha añadido un menú desplegable (<select>) que permite filtrar los personajes por su casa de Hogwarts (Gryffindor, Slytherin, Hufflepuff, Ravenclaw). Al seleccionar una casa, el listado se actualizará para mostrar únicamente los personajes que pertenecen a esa casa.

4. Componentización Clara y Reutilizable
   La aplicación está estructurada en componentes bien definidos para una mayor modularidad, mantenibilidad y escalabilidad. Se incluyen los siguientes componentes esenciales:

Componente de Filtro de Nombre: Encargado de gestionar el input de búsqueda por nombre.
Componente de Listado: Contenedor principal que organiza la visualización de las tarjetas de personajes.
Componente de Tarjeta de Personaje: Representa individualmente a cada personaje en el listado, mostrando su foto, nombre y especie.
Componente de Detalle de Personaje: Muestra la información extendida de un personaje al hacer clic en su tarjeta. 5. Detalle de Personajes con React Router
Al hacer clic en cualquier tarjeta de personaje, la aplicación navega a una nueva ruta para mostrar los detalles completos del personaje en una pantalla dedicada. Esta funcionalidad se implementa utilizando la biblioteca React Router, que permite la navegación entre diferentes vistas sin recargar la página. La vista de detalle incluye:

Foto
Nombre
Casa a la que pertenece
Estado (vivo o muerto)
Género
Especie
Botón para volver al listado principal. 6. Botón de Reset
Se ha implementado un botón de "Reset" que permite restablecer todos los filtros (nombre y casa) a sus valores iniciales, volviendo a mostrar el listado completo de todos los personajes. Esta funcionalidad facilita la navegación y reinicio de búsquedas.

🛠️ Tecnologías Utilizadas
React: El entorno de desarrollo principal para construir la interfaz de usuario.
React Router: Para gestionar la navegación y las rutas de la aplicación.
HTML5: Estructura del contenido.
CSS3 (SCSS/Sass): Estilos y diseño responsivo de la aplicación, utilizando la sintaxis SCSS para una mejor organización.
JavaScript (ES6+): Lógica y manipulación del DOM.
API Pública: https://hp-api.onrender.com/ para obtener los datos de los personajes.
🚀 Cómo Ponerlo en Marcha
Sigue estos pasos para clonar el repositorio y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
2. Instala las dependencias:

npm install

3. Inicia la aplicación en modo desarrollo:

npm run dev

Esto abrirá la aplicación en tu navegador predeterminado.

👩‍💻 Autor
Cristina Angélica Pérez Huerta.
