import React, { useState, useMemo } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';

function App() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [viewMode, setViewMode] = useState('list'); // 'list', 'add', 'edit', 'details'
    const [loading, setLoading] = useState(false);

    // Search, Sort, Pagination State
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleLoadStudents = async () => {
        setLoading(true);
        try {
            const data = await getAllStudents();
            setStudents(data);
        } catch (error) {
            alert('Error loading students: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddClick = () => {
        setSelectedStudent(null);
        setViewMode('add');
    };

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setViewMode('edit');
    };

    const handleViewClick = (student) => {
        setSelectedStudent(student);
        setViewMode('details');
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await deleteStudent(id);
                alert('Student deleted successfully. Please reload the list.');
                // Optional: remove from local state to reflect change immediately if desired
                // setStudents(students.filter(s => s.id !== id));
            } catch (error) {
                alert('Error deleting student: ' + error.message);
            }
        }
    };

    const handleSaveStudent = async (studentData) => {
        try {
            if (viewMode === 'add') {
                await createStudent(studentData);
                alert('Student added successfully. Please reload the list.');
            } else if (viewMode === 'edit') {
                await updateStudent(studentData.id, studentData);
                alert('Student updated successfully. Please reload the list.');
            }
            setViewMode('list');
        } catch (error) {
            alert('Error saving student: ' + error.message);
        }
    };

    const handleCancel = () => {
        setViewMode('list');
        setSelectedStudent(null);
    };

    // --- Logic for Search, Sort, Pagination ---

    // 1. Filter
    const filteredStudents = students.filter((student) => {
        const query = searchQuery.toLowerCase();
        return (
            student.name.toLowerCase().includes(query) ||
            student.section.toLowerCase().includes(query)
        );
    });

    // 2. Sort
    const sortedStudents = useMemo(() => {
        let sortableItems = [...filteredStudents];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle numeric sorting for marks
                if (sortConfig.key === 'marks') {
                    aValue = Number(aValue);
                    bValue = Number(bValue);
                }

                // Handle custom grade sorting
                if (sortConfig.key === 'grade') {
                    const gradeRanks = {
                        'O': 10,
                        'A+': 9,
                        'A': 8,
                        'B+': 7,
                        'B': 6,
                        'C': 5,
                        'P': 4,
                        'F': 0
                    };
                    // Default to 0 if grade not found
                    aValue = gradeRanks[aValue] || 0;
                    bValue = gradeRanks[bValue] || 0;
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredStudents, sortConfig]);

    // 3. Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = sortedStudents.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="App" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Student Result Management System</h1>

            {viewMode === 'list' && (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <button onClick={handleAddClick}>Add Student</button>
                        <button onClick={handleLoadStudents}>Load Students</button>
                    </div>

                    <StudentList
                        students={currentStudents}
                        loading={loading}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                        onView={handleViewClick}
                        // Search Props
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        // Sort Props
                        sortConfig={sortConfig}
                        requestSort={requestSort}
                        // Pagination Props
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}

            {(viewMode === 'add' || viewMode === 'edit') && (
                <StudentForm
                    student={selectedStudent}
                    onSave={handleSaveStudent}
                    onCancel={handleCancel}
                />
            )}

            {viewMode === 'details' && (
                <StudentDetails
                    student={selectedStudent}
                    onBack={handleCancel}
                />
            )}
        </div>
    );
}

export default App;
