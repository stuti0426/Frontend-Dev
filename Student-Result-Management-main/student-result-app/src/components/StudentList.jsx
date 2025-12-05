import React from 'react';

const StudentList = ({
    students,
    loading,
    onEdit,
    onDelete,
    onView,
    searchQuery,
    setSearchQuery,
    sortConfig,
    requestSort,
    currentPage,
    totalPages,
    setCurrentPage
}) => {

    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽';
        }
        return '';
    };

    return (
        <div className="student-list">
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search by Name or Section..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
                />
            </div>

            {loading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : students.length === 0 ? (
                <p>No students found.</p>
            ) : (
                <>
                    <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                        <thead>
                            <tr style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', color: '#333' }}>
                                <th onClick={() => requestSort('name')}>Name{getSortIndicator('name')}</th>
                                <th onClick={() => requestSort('section')}>Section{getSortIndicator('section')}</th>
                                <th onClick={() => requestSort('marks')}>Marks{getSortIndicator('marks')}</th>
                                <th onClick={() => requestSort('grade')}>Grade{getSortIndicator('grade')}</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.section}</td>
                                    <td>{student.marks}</td>
                                    <td>{student.grade}</td>
                                    <td>
                                        <button onClick={() => onView(student)} style={{ marginRight: '5px' }}>View</button>
                                        <button onClick={() => onEdit(student)} style={{ marginRight: '5px' }}>Edit</button>
                                        <button onClick={() => onDelete(student.id)} className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages || 1}</span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default StudentList;
