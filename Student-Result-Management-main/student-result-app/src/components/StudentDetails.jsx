import React from 'react';

const StudentDetails = ({ student, onBack }) => {
    if (!student) return null;

    return (
        <div className="student-details">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Section:</strong> {student.section}</p>
            <p><strong>Marks:</strong> {student.marks}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <button onClick={onBack}>Back to List</button>
        </div>
    );
};

export default StudentDetails;
