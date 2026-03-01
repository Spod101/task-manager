import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import '../styles/Dashboard.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchTasks();
  }, [token, navigate]);

  const fetchTasks = async () => {
    try {
      const data = await api.getTasks(token);
      if (Array.isArray(data)) {
        setTasks(data);
      } else if (data.message) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (err) {
      console.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (task) => {
    try {
      const data = await api.createTask(token, task);
      if (data._id) {
        setTasks([data, ...tasks]);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Failed to create task');
    }
  };

  const handleUpdateTask = async (task) => {
    try {
      const data = await api.updateTask(token, editingTask._id, task);
      if (data._id) {
        setTasks(tasks.map((t) => (t._id === data._id ? data : t)));
        setEditingTask(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    try {
      await api.deleteTask(token, id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Failed to delete task');
    }
  };

  const handleToggleStatus = async (task) => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    try {
      const data = await api.updateTask(token, task._id, { status: newStatus });
      if (data._id) {
        setTasks(tasks.map((t) => (t._id === data._id ? data : t)));
      }
    } catch (err) {
      console.error('Failed to update task');
    }
  };

  const openEditForm = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const openCreateForm = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Navbar />
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Navbar />
      <div className="container">
        <div className="dashboard-header">
          <h1>My Tasks</h1>
          <button className="btn btn-primary" onClick={openCreateForm}>
            + New Task
          </button>
        </div>

        {showForm && (
          <TaskForm
            task={editingTask}
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onCancel={() => {
              setShowForm(false);
              setEditingTask(null);
            }}
          />
        )}

        <TaskList
          tasks={tasks}
          onEdit={openEditForm}
          onDelete={handleDeleteTask}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
}

export default Dashboard;
