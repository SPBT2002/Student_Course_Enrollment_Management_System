import express from 'express';
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';

const router = express.Router();

// Routes
router.route('/').get(getStudents).post(createStudent);

router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

export default router;
