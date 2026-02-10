import React from 'react';

const StatsCards = ({ totalStudents, activeStudents, completeStudents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 max-w-7xl mx-auto px-4">
      {/* Total Students Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center">
          <div className="text-5xl mb-3">📚</div>
          <div className="text-5xl font-bold text-blue-600 mb-2">{totalStudents}</div>
          <div className="text-sm font-semibold text-blue-800">Total Students</div>
        </div>
      </div>

      {/* Active Students Card */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center">
          <div className="text-5xl mb-3">✅</div>
          <div className="text-5xl font-bold text-green-600 mb-2">{activeStudents}</div>
          <div className="text-sm font-semibold text-green-800">Active Students</div>
        </div>
      </div>

      {/* Complete Students Card */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center">
          <div className="text-5xl mb-3">🎓</div>
          <div className="text-5xl font-bold text-purple-600 mb-2">{completeStudents}</div>
          <div className="text-sm font-semibold text-purple-800">Complete Students</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
