import React, { useState } from 'react';

const StudentForm = ({ student, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: student ? student.name : '',
        section: student ? student.section : '',
        marks: student ? student.marks : '',
        grade: student ? student.grade : '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.section.trim()) {
            tempErrors.section = 'Section is required';
            isValid = false;
        }

        const marks = Number(formData.marks);
        if (!formData.marks) {
            tempErrors.marks = 'Marks are required';
            isValid = false;
        } else if (isNaN(marks) || marks < 0 || marks > 100) {
            tempErrors.marks = 'Marks must be between 0 and 100';
            isValid = false;
        }

        if (!formData.grade.trim()) {
            tempErrors.grade = 'Grade is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSave({ ...formData, id: student ? student.id : undefined });
        }
    };

    return (
        <div className="student-form">
            <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</span>}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Section:</label>
                    <input
                        type="text"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.section && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.section}</span>}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Marks:</label>
                    <input
                        type="number"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.marks && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.marks}</span>}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Grade:</label>
                    <input
                        type="text"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.grade && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.grade}</span>}
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel} style={{ marginLeft: '0.5rem' }}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
