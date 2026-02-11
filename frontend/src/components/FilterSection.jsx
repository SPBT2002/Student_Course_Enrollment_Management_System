import React from 'react';

const FilterSection = ({ searchTerm, setSearchTerm, selectedCourse, setSelectedCourse, onAddStudent }) => {
  const courses = ['All Courses', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Engineering', 'Business'];

  return (
    <div className="bg-white py-4 md:py-6 px-4 md:px-8 mb-6 max-w-7xl mx-auto rounded-lg">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="flex-1 md:max-w-md relative">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            </span>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-6 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Course Filter Dropdown */}
        <div className="flex-1 md:max-w-md">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 bg-white cursor-pointer"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Add New Student Button */}
        <button
          onClick={onAddStudent}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md w-full md:w-auto"
        >
          <span className="text-xl">+</span>
          <span>Add New Student</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
