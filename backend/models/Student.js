import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a student name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      trim: true,
    },
    course: {
      type: String,
      required: [true, 'Please add a course'],
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['Active', 'Complete', 'Pending'],
      default: 'Active',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Student = mongoose.model('Student', studentSchema);

export default Student;
