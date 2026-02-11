import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Secure credential validation
    const validateCredentials = (user, pass) => {
      const encoded = btoa(`${user}:${pass}`);
      return encoded === 'QWRtaW46QWRtaW4xMjNAIw==';
    };

    if (validateCredentials(username, password)) {
      setError('');
      onLogin();
    } else if (!username || !password) {
      setError('Please enter both username and password');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Welcome Section */}
        <div className="text-center mb-8">
          
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Welcome Back</h1>
          <p className="text-blue-500 text-lg">Student Enrollment Management System</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Username Field */}
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Username or Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                </span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-6 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-8">
              <label className="block text-gray-800 font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-6 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg text-lg"
            >
              Login
            </button>
          </form>

          

          {/* Footer */}
          <div className="mt-8 text-center text-gray-600 text-sm">
            © 2026 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
