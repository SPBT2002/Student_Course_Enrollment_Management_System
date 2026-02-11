import React from 'react';

const StudentRow = ({ student, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'complete':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-700">#{student._id?.slice(-6) || 'N/A'}</td>
      <td className="px-6 py-4">
        <div className="font-semibold text-gray-900">{student.name}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">{student.email}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{student.phone}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{student.course}</td>
      <td className="px-6 py-4">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusClass(student.status)}`}>
          {student.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(student)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-colors text-sm font-medium shadow-sm"
          >
           
            Edit
          </button>
          <button
            onClick={() => onDelete(student._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-colors text-sm font-medium shadow-sm"
          >
            
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
