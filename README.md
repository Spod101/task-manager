# Task Manager

A full-stack task management application with REST API and React frontend.

## Project Structure

```
task-manager/
├── backend/          # Express REST API
│   ├── src/
│   ├── package.json
│   └── .env.example
├── frontend/         # React (Vite)
│   ├── src/
│   ├── package.json
│   └── .env.example
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