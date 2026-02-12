<div align="center">

# 🎓 Student Course Enrollment Management System

### *Streamline Your Academic Administration with Modern Technology*

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

*A powerful, full-stack web application designed to revolutionize student enrollment management with real-time data synchronization, intuitive UI, and robust backend architecture.*

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [API](#-api-documentation) • [License](#-license)

</div>

---

## 🌟 Features

### 📊 Dashboard & Analytics
- **Real-time Statistics** - Live count of total students, active enrollments, and completed courses
- **Visual Overview** - Beautiful stat cards with color-coded metrics
- **Instant Updates** - Data refreshes automatically after every operation

### 🔍 Advanced Filtering & Search
- **Smart Search** - Search students by name or email with real-time filtering
- **Course Filter** - Filter students by enrolled courses with dropdown selection
- **Combined Filters** - Use both search and course filter simultaneously
- **Clear Controls** - One-click clear button for instant filter reset

### 👥 Student Management
- **CRUD Operations** - Complete Create, Read, Update, Delete functionality
- **Form Validation** - Client and server-side validation for data integrity
- **Email Uniqueness** - Prevents duplicate student entries
- **Status Tracking** - Monitor student status (Active/Complete/Pending)
- **Instant Feedback** - Success and error messages for all operations

### 🎨 Modern UI/UX
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **Tailwind CSS** - Modern, utility-first styling with beautiful gradients
- **Modal Forms** - Elegant overlay forms for adding/editing students
- **Loading States** - Smooth loading indicators and transitions
- **Error Handling** - User-friendly error messages and recovery

### 🔐 Security
- **Secure Authentication** - Encoded credential validation
- **Admin Login** - Role-based access control
- **Protected Routes** - Session management with localStorage
- **Input Sanitization** - Server-side validation and Mongoose schema enforcement

### 🚀 Performance
- **MongoDB Atlas** - Cloud-based database with auto-scaling
- **RESTful API** - Efficient data transfer with Express.js
- **Fast Development** - Vite for lightning-fast frontend builds
- **Hot Reload** - Instant updates during development

---

## 🎯 Demo

### Login Screen
- **Username:** `Admin`
- **Password:** `Admin123@#`

### Main Dashboard
- View all students with their enrollment details
- Real-time search across student records
- Filter by multiple course categories
- Add new students with comprehensive form validation

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19 + Vite | Lightning-fast UI development |
| **Styling** | Tailwind CSS 4.1 | Modern, responsive design |
| **Backend** | Node.js + Express 4.18 | RESTful API server |
| **Database** | MongoDB Atlas | Cloud NoSQL database |
| **ODM** | Mongoose 8.0 | Schema validation & modeling |
| **Dev Tools** | Nodemon + ESLint | Auto-reload & code quality |

</div>

---

## 📁 Project Architecture

```
Student_Course_Enrollment_Management_System/
│
├── 🎨 frontend/                      # React + Vite Application
│   ├── src/
│   │   ├── components/              # Reusable UI Components
│   │   │   ├── Header.jsx          # Navigation & logout
│   │   │   ├── StatsCards.jsx      # Dashboard statistics
│   │   │   └── FilterSection.jsx   # Search & filter controls
│   │   ├── pages/
│   │   │   ├── Login.jsx           # Secure authentication
│   │   │   └── Dashboard/          # Main application
│   │   │       ├── Dashboard.jsx   # Container component
│   │   │       ├── StudentTable.jsx# Data table display
│   │   │       ├── StudentRow.jsx  # Individual records
│   │   │       └── StudentForm.jsx # Add/Edit modal
│   │   ├── services/
│   │   │   └── api.js              # API integration layer
│   │   └── App.jsx                 # Root component
│   └── package.json
│
├── 🔧 backend/                       # Node.js + Express API
│   ├── config/
│   │   └── db.js                   # MongoDB Atlas connection
│   ├── models/
│   │   └── Student.js              # Mongoose schema
│   ├── controllers/
│   │   └── studentController.js    # Business logic
│   ├── routes/
│   │   └── studentRoutes.js        # API endpoints
│   ├── .env                        # Environment variables
│   └── server.js                   # Application entry point
│
└── 📚 README.md                      # You are here!
```

---

## 🚀 Installation

### Prerequisites

```bash
✓ Node.js (v14 or higher)
✓ npm or yarn package manager
✓ MongoDB Atlas account (free tier available)
```

### Quick Start

**1. Clone & Navigate:**
```bash
git clone <your-repo-url>
cd Student_Course_Enrollment_Management_System
```

**2. Backend Setup:**
```bash
cd backend
npm install

# Create .env file with:
PORT=5001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student_enrollment
NODE_ENV=development
```

**3. Frontend Setup:**
```bash
cd ../frontend
npm install
```

**4. Start Servers:**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

**5. Access:** Open `http://localhost:5173` and login with `Admin` / `Admin123@#`

---

## 📡 API Documentation

### Base URL: `http://localhost:5001/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/students` | Retrieve all students |
| `GET` | `/students/:id` | Get single student |
| `POST` | `/students` | Create new student |
| `PUT` | `/students/:id` | Update student |
| `DELETE` | `/students/:id` | Delete student |

---
## 🎨 Available Courses

The system currently supports the following course categories:

- Computer Science
- Mathematics
- Physics
- Chemistry
- Biology
- Engineering
- Business

*Custom courses can be added by modifying the `FilterSection.jsx` component.*

---

## 🔧 Configuration

### Frontend Configuration

**API URL:** Located in `frontend/src/services/api.js`
```javascript
const API_URL = 'http://localhost:5001/api/students';
```

**Login Credentials:** Located in `frontend/src/pages/Login.jsx` (encoded)

### Backend Configuration

**Environment Variables:** See `backend/.env`
```env
PORT=5001                    # Server port
MONGODB_URI=<your-uri>       # MongoDB Atlas connection string
NODE_ENV=development         # Environment mode
```

---

## 📞 Support

Having issues? Here's how to get help:

1. **Check the Troubleshooting section** above
2. **Review the API documentation**
3. **Verify your MongoDB connection settings**
4. **Ensure all dependencies are installed correctly**
5. **Check terminal outputs for specific errors**
6. **Review browser console for frontend errors**

Common Issues:
- Port conflicts → Kill existing Node processes
- MongoDB connection → Check credentials and IP whitelist
- Module errors → Delete node_modules and reinstall
- API errors → Ensure backend is running on correct port

---

<div align="center">


Made using React, Node.js, Express, MongoDB, and Tailwind CSS

---

[Back to Top](#-student-course-enrollment-management-system)

© 2026 Student Course Enrollment Management System. All rights reserved.

</div>
