import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-7xl mx-auto">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">ID</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Email</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Course</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                  No students found
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <StudentRow
                  key={student._id}
                  student={student}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
