const API_URL = 'http://localhost:5001/api/students';

// Get all students
export const getStudents = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch students');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Create a new student
export const createStudent = async (studentData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create student');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

// Update a student
export const updateStudent = async (id, studentData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update student');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete student');
    }
    
    return data;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
