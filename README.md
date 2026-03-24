# Task Manager

A full-stack task management application with REST API and React frontend.

## Project Structure

```
task-manager/
├── backend/                      # Express REST API
│   ├── src/
│   │   ├── app.js               # Express app configuration
│   │   ├── config/
│   │   │   └── db.js            # Database configuration
│   │   ├── controllers/         # Business logic
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── middleware/          # Custom middleware
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   ├── models/              # Database schemas
│   │   │   ├── Task.js
│   │   │   └── User.js
│   │   ├── routes/              # API routes
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   └── utils/               # Utility functions
│   │       └── generateToken.js
│   ├── package.json
│   └── src/
├── frontend/                     # React (Vite)
│   ├── src/
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   ├── index.css            # Global styles
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── pages/               # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── services/            # API client services
│   │   │   └── api.js
│   │   └── styles/              # Component styles
│   │       ├── Auth.css
│   │       ├── Dashboard.css
│   │       ├── Navbar.css
│   │       ├── TaskForm.css
│   │       └── TaskItem.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── public/
└── README.md
```

## Setup

### Backend

```bash
cd backend
npm install
cp .env.example .env    # Configure your environment variables
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## Tech Stack

**Backend:** Node.js, Express, MongoDB, JWT
**Frontend:** React, Vite, React Router