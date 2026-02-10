import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import StatsCards from '../../components/StatsCards';
import FilterSection from '../../components/FilterSection';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';

const Dashboard = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  
  // Initial student data
  const initialStudents = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '1234567890',
      course: 'Computer Science',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '2345678901',
      course: 'Mathematics',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol.w@email.com',
      phone: '3456789012',
      course: 'Physics',
      status: 'Complete',
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.brown@email.com',
      phone: '4567890123',
      course: 'Computer Science',
      status: 'Complete',
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '5678901234',
      course: 'Chemistry',
      status: 'Active',
    },
  ];

  // Load students from localStorage or use initial data
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students')
    return savedStudents ? JSON.parse(savedStudents) : initialStudents
  });

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students]);

  // Filter students based on search term and selected course
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
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
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // Handle form submit
  const handleFormSubmit = (formData) => {
    if (editStudent) {
      // Update existing student
      setStudents(students.map((s) =>
        s.id === editStudent.id ? { ...s, ...formData } : s
      ));
    } else {
      // Add new student
      const newStudent = {
        id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        ...formData,
      };
      setStudents([...students, newStudent]);
    }
    setIsFormOpen(false);
    setEditStudent(null);
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
