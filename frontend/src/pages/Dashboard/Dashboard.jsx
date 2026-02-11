import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import StatsCards from '../../components/StatsCards';
import FilterSection from '../../components/FilterSection';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import * as api from '../../services/api';

const Dashboard = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students from API
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getStudents();
      setStudents(data);
    } catch (err) {
      setError('Failed to load students. Please make sure the backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter students based on search term and selected course
  const filteredStudents = students.filter((student) => {
    // Trim and normalize search term
    const searchValue = searchTerm.trim().toLowerCase();
    
    // Search in name and email (more flexible search)
    const matchesSearch = searchValue === '' || 
      (student.name && student.name.toLowerCase().includes(searchValue)) ||
      (student.email && student.email.toLowerCase().includes(searchValue));
    
    // Course filter
    const matchesCourse = selectedCourse === 'All Courses' || student.course === selectedCourse;
    
    return matchesSearch && matchesCourse;
  });

  // Calculate statistics
  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.status === 'Active').length;
  const completeStudents = students.filter((s) => s.status === 'Complete').length;

  // Handle add student
  const handleAddStudent = () => {
    setEditStudent(null);
    setIsFormOpen(true);
  };

  // Handle edit student
  const handleEdit = (student) => {
    setEditStudent(student);
    setIsFormOpen(true);
  };

  // Handle delete student
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await api.deleteStudent(id);
        await fetchStudents(); // Refresh the list
      } catch (err) {
        alert('Failed to delete student. Please try again.');
        console.error(err);
      }
    }
  };

  // Handle form submit
  const handleFormSubmit = async (formData) => {
    try {
      if (editStudent) {
        // Update existing student
        await api.updateStudent(editStudent._id, formData);
      } else {
        // Add new student
        await api.createStudent(formData);
      }
      await fetchStudents(); // Refresh the list
      setIsFormOpen(false);
      setEditStudent(null);
    } catch (err) {
      alert(err.message || 'Failed to save student. Please try again.');
      console.error(err);
    }
  };

  // Handle form close
  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditStudent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={onLogout} />
      {/* Add top padding to prevent content being hidden behind the fixed header */}
      <div className="pt-24 md:pt-28 lg:pt-32 pb-8 px-4 md:px-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-xl text-gray-600">Loading students...</div>
          </div>
        ) : (
          <>
            <StatsCards 
              totalStudents={totalStudents} 
              activeStudents={activeStudents}
              completeStudents={completeStudents}
            />
            
            <FilterSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              onAddStudent={handleAddStudent}
            />
            
            <StudentTable
              students={filteredStudents}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        )}
      </div>

      <StudentForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        editStudent={editStudent}
      />
    </div>
  );
};

export default Dashboard;
