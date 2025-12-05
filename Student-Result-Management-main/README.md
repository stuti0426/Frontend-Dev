# Student Result Management System

A comprehensive, React-based web application designed to manage student results efficiently. This system allows for performing CRUD (Create, Read, Update, Delete) operations on student records, complete with advanced features like search, sorting, pagination, and data validation, all wrapped in a modern, responsive user interface.

## 🚀 Features

-   **CRUD Operations**: Seamlessly Add, View, Edit, and Delete student records.
-   **Search & Filter**: Real-time filtering of students by Name or Section.
-   **Advanced Sorting**: Sort student lists by Name, Section, Marks, or Grade (supports semantic grade sorting: O > A+ > A...).
-   **Pagination**: Efficiently manage large datasets with built-in pagination (5 records per page).
-   **Form Validation**: Robust validation to ensure data integrity (e.g., marks range 0-100, required fields).
-   **Modern UI/UX**:
    -   Glassmorphism design with gradient backgrounds.
    -   Interactive hover effects and smooth animations.
    -   Loading spinners for better user feedback.
    -   Responsive layout for various screen sizes.
-   **Manual Data Fetching**: Data is loaded on-demand to optimize performance.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://reactjs.org/) (v18)
-   **Build Tool**: [Vite](https://vitejs.dev/) - For fast development and building.
-   **Styling**: Vanilla CSS3 with modern features (CSS Variables, Flexbox, Animations, Media Queries).
-   **Backend (Mock)**: [JSON Server](https://github.com/typicode/json-server) - Simulates a full REST API for development.
-   **HTTP Client**: Native Fetch API.

## 📂 Project Structure

Here's an overview of the project's file and folder organization:

```
Student-Result-Management/
├── Project Goal.md      # Detailed project requirements and goals
├── README.md            # Project documentation (this file)
├── Student Result Management System.pdf # Original requirements PDF
├── student-result-app/  # Main Application Folder
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── services/    # API communication logic
│   │   ├── App.jsx      # Main application component
│   │   ├── index.css    # Global styles
│   │   └── index.jsx    # Entry point
│   ├── db.json          # The "Database" file for JSON Server
│   ├── index.html       # Main HTML file
│   ├── package.json     # Project dependencies
│   └── vite.config.js   # Vite configuration

```

### Key Files Explained

-   **`src/App.jsx`**: The heart of the application. It manages the global state (list of students, view modes, search queries, pagination) and orchestrates which component to render.
-   **`src/services/studentService.js`**: Abstraction layer for API calls. Keeps the UI components clean by handling `fetch` requests here.
-   **`db.json`**: Acts as a persistent database. JSON Server reads from and writes to this file.
-   **`src/index.css`**: Contains all the custom styling rules, including the "premium" glassmorphism look and animations.

## ⚙️ Installation & Run Instructions

Follow these steps to set up and run the project locally.

### Prerequisites

-   **Node.js** (v14 or higher) installed on your machine.
-   **npm** (Node Package Manager) which comes with Node.js.

### Steps

1.  **Clone or Download** the project folder to your local machine.

2.  **Navigate to the project directory** in your terminal:
    ```bash
    cd student-result-app
    ```

3.  **Install Dependencies**:
    Run the following command to install all necessary packages (React, Vite, JSON Server, etc.):
    ```bash
    npm install
    ```

4.  **Start the Backend Server**:
    This project uses `json-server` to mock a backend. Open a terminal and run:
    ```bash
    npm run server
    ```
    *The server will start at `http://localhost:3000`.*

5.  **Start the Frontend Application**:
    Open a **new** terminal window (keep the server terminal running) and execute:
    ```bash
    npm run dev
    ```
    *The application will start, usually at `http://localhost:5173`.*

6.  **Open in Browser**:
    Click the link shown in the terminal (e.g., `http://localhost:5173`) to view the app.

## 🧪 How to Use

1.  **Load Data**: Click the **"Load Students"** button on the top right to fetch the initial list of students.
2.  **Add Student**: Click **"Add Student"**, fill in the details (Name, Section, Marks, Grade), and click Save.
3.  **Edit**: Click the **"Edit"** button next to any student to modify their details.
4.  **Delete**: Click **"Delete"** to remove a student record.
5.  **Search**: Type in the search bar to filter students instantly.
6.  **Sort**: Click on any column header (Name, Marks, Grade) to sort the data. Click again to toggle ascending/descending.
7.  **Navigate**: Use the **"Previous"** and **"Next"** buttons at the bottom to move between pages.

## 👨‍💻 Author

**Gaurav Chaudhary**
<br>
*B.Tech Honors 3rd Year / 5th Semester*
<br>
*GLA University*

- 🐙 [GitHub Profile](https://github.com/Gaurav-Chaudhary04)
- 💼 [LinkedIn Profile](https://www.linkedin.com/in/gaurav-chaudhary-profile/)

---
*Developed for College Assessment - Semester V*
