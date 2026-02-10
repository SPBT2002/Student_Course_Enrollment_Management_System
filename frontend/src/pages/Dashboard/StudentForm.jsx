import React, { useState, useEffect } from 'react';

const StudentForm = ({ isOpen, onClose, onSubmit, editStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    status: 'Active',
  });

  useEffect(() => {
    if (editStudent) {
      setFormData({
        name: editStudent.name,
        email: editStudent.email,
        phone: editStudent.phone,
        course: editStudent.course,
        status: editStudent.status,
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        status: 'Active',
      });
    }
  }, [editStudent, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.course) {
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        status: 'Active',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">
            {editStudent ? '✏️ Edit Student' : '➕ Add New Student'}
          </h2>
          <p className="text-blue-100 text-sm mt-1">
            {editStudent ? 'Update student information' : 'Fill in the details to add a new student'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@email.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 bg-white"
              >
                <option value="">Select a course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Engineering">Engineering</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 bg-white"
              >
                <option value="Active">Active</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              {editStudent ? 'Update Student' : 'Add Student'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
