# LightOn 📚 Home Library App

The **LightOn Home Library App** is a simple, full-stack project that allows users to **add, view, and manage a personal book collection**. Built with **React on the frontend** and connected to a **Node.js/Express backend with Sequelize**, it provides a clean interface to store and browse books with their details.

---

## 🧩 Features

* 📖 **View Books**: Displays a list of books from a backend API
* 📝 **Add Books**: Form-based input to add new books (title, author, year, description)
* 🌐 **RESTful API Integration**: Frontend fetches data from a local backend server
* ⚙️ **React Hooks**: Uses `useState` and `useEffect` for state and lifecycle
* 🛠️ **Scaffolded Redux & Sequelize integration** for future expansion

---

## 🖥️ Tech Stack

**Frontend:**

* React
* JavaScript (ES6+)
* Inline CSS styling

**Backend (assumed based on context):**

* Node.js
* Express.js
* Sequelize ORM (with PostgreSQL or another SQL DB)

---

## 📂 Components Overview

### `Library.jsx`

* Fetches book data from `http://localhost:3001/api/books/`
* Displays a list of books with title, author, and year
* Simple styling and map-based rendering of book entries

### `BookCreator.jsx`

* UI form for entering book details
* Form fields: title, author, year published, description
* Planned dispatch to Redux and Sequelize model (scaffolded)

---

## 🧪 Future Improvements

* Connect form to Redux state and backend POST route
* Add validation and confirmation on book submission
* Improve layout and styling using component libraries or CSS frameworks
* Add ability to edit and delete books

---

## 🚀 Getting Started

1. **Clone the repo**
2. **Install dependencies** for both frontend and backend
3. **Start the backend** (on port 3001)
4. **Run the frontend** (e.g., via Vite or Create React App)
5. Open your browser at `http://localhost:3000`
