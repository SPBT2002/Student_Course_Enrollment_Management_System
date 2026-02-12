import Student from '../models/Student.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Public
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Public
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// @desc    Create new student
// @route   POST /api/students
// @access  Public
export const createStudent = async (req, res) => {
  try {
    const { name, email, phone, course, status } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: 'Student with this email already exists',
      });
    }

    const student = await Student.create({
      name,
      email,
      phone,
      course,
      status: status || 'Active',
    });

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create student',
      error: error.message,
    });
  }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Public
export const updateStudent = async (req, res) => {
  try {
    const { name, email, phone, course, status } = req.body;

    let student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Check if email is being changed and if new email already exists
    if (email && email !== student.email) {
      const existingStudent = await Student.findOne({ email });
      if (existingStudent) {
        return res.status(400).json({
          success: false,
          message: 'Student with this email already exists',
        });
      }
    }

    student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, course, status },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update student',
      error: error.message,
    });
  }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Public
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error: error.message,
    });
  }
};
