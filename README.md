# ⚡ Harry Potter Character Explorer ⚡

🔮 Una aplicación web interactiva que te permite explorar el mágico universo de personajes de **Harry Potter**.  
Puedes buscar por nombre, filtrar por casa de Hogwarts y consultar detalles individuales.  
Desarrollada con **React** para ofrecer una experiencia dinámica y fluida.

---

## ✨ Funcionalidades Principales

Esta aplicación está diseñada para ofrecer una experiencia de exploración simple y eficiente de los personajes, incorporando:

### 🧙‍♂️ 1. Listado completo de personajes

📦 Al cargar la app, se obtiene un listado desde la API pública:  
🔗 [`https://hp-api.onrender.com/api/characters`](https://hp-api.onrender.com/api/characters)

Cada tarjeta de personaje incluye:

- 🖼️ **Foto** (o imagen por defecto si no está disponible)
- 🧾 **Nombre completo**
- 🧬 **Especie** (humano, elfo, etc.)

### 🔎 2. Filtro dinámico por nombre

📝 Un campo `<input>` permite filtrar personajes mientras escribes, mostrando solo aquellos que coincidan con las letras introducidas.

### 🏰 3. Filtro por casa de Hogwarts

📂 Un menú `<select>` permite filtrar por casa: Gryffindor, Slytherin, Hufflepuff o Ravenclaw.  
Solo se muestran los personajes que pertenecen a la casa seleccionada.

### 🧩 4. Componentes claros y reutilizables

🧱 La app está dividida en componentes bien definidos para mayor escalabilidad:

- 🧼 **NameFilter**: Controla el input de búsqueda
- 📃 **Listing**: Contenedor principal de tarjetas
- 🧙 **CharacterCard**: Representa individualmente a cada personaje
- 📖 **CharacterDetail**: Muestra los detalles al hacer clic en una tarjeta

### 🌐 5. Navegación con React Router

🚪 Al hacer clic en una tarjeta, se navega a una **ruta específica** mostrando más detalles:  
(Implementado con `React Router` para una navegación sin recarga de página)

Incluye:

- Imagen
- Nombre
- Casa
- Estado (vivo o muerto)
- Género
- Especie  
  ↩️ Botón para volver al listado

### 🔁 6. Botón de reinicio

🧼 Botón "Reset" que limpia todos los filtros y restablece la lista completa.  
Facilita nuevas búsquedas y mejora la navegación.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **React** – UI principal
- 🧭 **React Router** – Navegación
- 🧱 **HTML5** – Estructura
- 🎨 **SCSS (Sass)** – Estilos
- 💡 **JavaScript (ES6+)** – Lógica de la app
- 🌐 **API Pública** – [`hp-api`](https://hp-api.onrender.com/)

---

## 🧪 Cómo empezar

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

# 1. Clona el repositorio

```bash
git clone https://github.com/Chrissy-92/harry-potter-character-explorer.git
cd harry-potter-character-explorer
```

# 2. Instala las dependencias

```bash
npm install
```

# 3. Ejecuta la app en modo desarrollo

```bash
npm run dev
```

📂 Esto abrirá la aplicación automáticamente en tu navegador.

👩‍💻 Autora
Cristina Angélica Pérez Huerta
Desarrolladora Web Full Stack.
