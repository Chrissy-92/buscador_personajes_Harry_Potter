# ⚡ Harry Potter Character Explorer ⚡

## An interactive web application that allows you to explore the vast world of Harry Potter characters. You can search characters by name, filter by their Hogwarts house, and view full details for each one. Developed with React for a fluid and dynamic user experience.

## 🚀 Key Features

This project has been designed to offer a simple and efficient Browse experience through the list of Harry Potter characters, incorporating the following features:

### 1. Comprehensive Character List

Upon loading the application, a list of all Harry Potter characters is displayed, fetched from the https://hp-api.onrender.com/api/characters API. Each character card shows:

**Photo:** The character's official image. If a character does not have an image available from the API, a default placeholder image will be displayed to ensure consistent visualization.
**Name:** The character's full name.
**Species:** The character's species (human, elf, etc.).

### 2. Dynamic Filtering by Name

An input field (<input>) is included, allowing users to filter the character list in real-time. As you type, only characters whose names contain the entered letters will remain in the interface, making it easy to find specific characters.

### 3. Filtering by House

A dropdown menu (<select>) has been added to filter characters by their Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw). Selecting a house will update the list to show only characters belonging to that house.

### 4. Clear and Reusable Components

The application is structured into well-defined components for greater modularity, maintainability, and scalability. The following essential components are included:

#### Name Filter Component

Manages the name search input.

### Listing Component

The main container that organizes the display of character cards.

#### Character Card Component

Individually represents each character in the list, displaying their photo, name, and species.

### Character Detail Component

Shows extended information about a character when their card is clicked.

### 5. Character Detail with **React Router**

Clicking on any character card navigates to a new route to display the character's full details on a dedicated screen. This functionality is implemented using the React Router library, which allows navigation between different views without a full page reload. The detail view includes:

*Photo
*Name
*Belonging House
*Status (alive or dead)
*Gender
*Species

A "back" button to return to the main list.

### 6. Reset Button

A "Reset" button has been implemented to reset all filters (name and house) to their initial values, bringing back the complete list of all characters. This feature facilitates navigation and restarting searches.

---

## 🛠️ Technologies Used

- **React:** The primary development environment for building the user interface.
- **React Router:** For managing application navigation and routes.
- **HTML5:** Content structure.
- **CSS3 (SCSS/Sass):** Application styles and responsive design, utilizing SCSS syntax for better organization.
- **JavaScript (ES6+):** Logic and DOM manipulation.
- **Public API:** https://hp-api.onrender.com/ to fetch character data.

---

## 🚀 How to Get Started

Follow these steps to clone the repository and run the project on your local machine:

### 1. Clone the repository:

git clone

### 2. Install dependencies:

npm install

### 3. Start the application in development mode:

npm run dev

This will open the application in your default browser.

## 👩‍💻 Author

Cristina Angélica Pérez Huerta.
