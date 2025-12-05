# 🎯 Project Goal

Build a **React application** that can **Add, View, Edit, and Delete** student data. The system should be built using:
-   ⚛️ **React Components**
-   🎣 **`useState`** for managing all data
-   🗄️ **JSON Server** as the backend
-   🌐 **Fetch API** for CRUD operations

**The app manages the following data fields:**
-   Name
-   Section
-   Marks
-   Grade

---

## 📂 Folder Structure

```
student-result-app/
│
├── db.json                 # 🗄️ JSON Server database (stores students)
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx    # 📋 Shows all students & action buttons
│   │   ├── StudentForm.jsx    # 📝 Add + Edit student form
│   │   └── StudentDetails.jsx # ℹ️ Shows detailed result info
│   │
│   ├── services/
│   │   └── studentService.js  # 🔌 Handles all API calls (CRUD)
│   │
│   ├── App.jsx                # 🧠 Main logic, state handling, view switching
│   └── index.js               # 🚀 React entry point
│
├── public/                 # 🌐 Static files (index.html)
├── package.json            # 📦 Project dependencies & scripts
└── node_modules/           # 📚 Auto-installed packages
```

---

## 🧩 Component Architecture

### 1. `StudentList`
-   **Purpose**: Displays all students in a table or list format.
-   **Actions**:
    -   🔄 **Load Students**
    -   ➕ **Add Student**
    -   ✏️ **Edit**
    -   🗑️ **Delete**
    -   👁️ **View Details**

### 2. `StudentForm`
-   **Purpose**: Used for both **Adding** and **Editing** student records.
-   **Fields**: Name, Section, Marks, Grade.
-   **State**: Uses only `useState` for form handling.

### 3. `StudentDetails`
-   **Purpose**: Shows complete information of a single student.
-   **Type**: Simple read-only view.

### 4. `studentService.js`
-   **Purpose**: Centralizes communication with the JSON Server.
-   **Methods**: Handles `GET`, `POST`, `PUT`, and `DELETE` requests.

### 5. `App.jsx`
-   **Purpose**: The main controller.
-   **Responsibilities**:
    -   Holds main states (`students`, `selectedStudent`, `viewMode`).
    -   Switches between screens (List, Form, Details).

---

## ⚠️ Data Flow & Constraints (No `useEffect`)

To keep the project beginner-friendly and focused on manual interactions:
> **All data fetching must happen through manual user actions.**

-   ❌ **No `useEffect`** for initial data loading.
-   ✅ **"Load Students" Button**: Users must click this to fetch data.
-   ✅ **Post-Action Refresh**: After adding, editing, or deleting, show an alert and ask the user to click "Load Students" again.
-   **Trigger Points**: API calls only happen inside button click handlers or form submissions.

---

## 🔄 CRUD Workflow

### 1. Create (Add Student)
Fill the form ➡️ Submit ➡️ Student saved in JSON Server.

### 2. Read (View Student List)
Click "Load Students" ➡️ All students displayed in `StudentList`.

### 3. Update (Edit Student)
Click "Edit" ➡️ Form opens with pre-filled data ➡️ Update info ➡️ Save changes.

### 4. Delete (Remove Student)
Click "Delete" ➡️ Confirm action ➡️ Student removed from JSON Server.

### 5. View Details
Click "View" ➡️ Show full result details (Marks, Grade, Section, Name).

---

## 🌟 Optional Enhancements (Bonus)

While the above requirements are mandatory, you are highly encouraged to add these features for a better score:

-   🔍 **Search or Filter** (by Name/Section)
-   ⬇️ **Sorting** (by Marks, Grade, etc.)
-   📄 **Pagination** (Limit items per page)
-   ✅ **Form Validation** (Check for empty fields, valid marks)
-   🎨 **Better UI/Styling** (CSS improvements)
-   ⏳ **Loading Indicators** (Spinners during API calls)
