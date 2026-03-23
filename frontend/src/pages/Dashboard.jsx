import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import '../styles/Dashboard.css';

const IconBoard = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="13" y="3" width="8" height="5" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="13" y="10" width="8" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="13" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 4h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 4v2.5M15 4v2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 8h8v9a4 4 0 0 1-8 0V8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M10 11h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="m8 12.2 2.5 2.6L16 9.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFlame = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4 4 18h16L12 4Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 9.5v4.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="16.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const IconSpark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 1.8 4.5L18 9.3l-4.2 1.8L12 15.6l-1.8-4.5L6 9.3l4.2-1.8L12 3Z" />
    <path d="m18.5 14 .8 2 .2.5.5.2 2 .8-2 .8-.5.2-.2.5-.8 2-.8-2-.2-.5-.5-.2-2-.8 2-.8.5-.2.2-.5.8-2Z" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7" y="4" width="10" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 4.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconBell = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4a5 5 0 0 0-5 5v2.8c0 .8-.3 1.5-.8 2.1L5 15.5h14l-1.2-1.6a3.4 3.4 0 0 1-.8-2.1V9a5 5 0 0 0-5-5Z" />
    <path d="M10 18a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCog = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.4 3h3.2l.5 2.1c.5.2 1 .4 1.4.8l2-.8 1.6 2.8-1.5 1.5c.1.5.1 1 .1 1.6s0 1.1-.1 1.6l1.5 1.5-1.6 2.8-2-.8c-.4.3-.9.6-1.4.8l-.5 2.1h-3.2l-.5-2.1c-.5-.2-1-.4-1.4-.8l-2 .8-1.6-2.8 1.5-1.5a7 7 0 0 1 0-3.2L4.9 7.9l1.6-2.8 2 .8c.4-.3.9-.6 1.4-.8L10.4 3Z" />
    <circle cx="12" cy="12" r="2.3" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconLogout = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="m14 8 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 12h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconPlus = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const token = localStorage.getItem('token');
  const storedUser = (() => {
    try {
      const raw = localStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const getDisplayName = () => {
    const preferredName = storedUser?.name || storedUser?.username;
    if (preferredName) return preferredName;

    const email = storedUser?.email;
    if (!email) return 'Planner';
    return email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '') || 'Planner';
  };

  const getEmail = () => {
    return storedUser?.email || 'planner@workspace.app';
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchTasks();
  }, [token, navigate]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!profileRef.current?.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
  const highPriorityTasks = tasks.filter((task) => task.priority === 'high').length;
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const categories = [
    { key: 'all', label: 'All Tasks', icon: <IconBoard />, value: totalTasks },
    { key: 'pending', label: 'Pending', icon: <IconClock />, value: pendingTasks },
    { key: 'completed', label: 'Done', icon: <IconCheck />, value: completedTasks },
    { key: 'priority', label: 'Priority', icon: <IconFlame />, value: highPriorityTasks },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeCategory === 'pending') return task.status === 'pending';
    if (activeCategory === 'completed') return task.status === 'completed';
    if (activeCategory === 'priority') return task.priority === 'high';
    return true;
  });

  const featuredTask =
    filteredTasks.find((task) => task.status === 'pending') ||
    filteredTasks[0] ||
    tasks.find((task) => task.status === 'pending') ||
    tasks[0] ||
    null;

  const profileInitial = getDisplayName().slice(0, 1).toUpperCase();
  const displayName = getDisplayName();
  const displayEmail = getEmail();

  if (loading) {
    return (
      <div className="dashboard-shell">
        <div className="dashboard-container">
          <div className="loading-state">Loading your planner...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-shell">
      <div className="dashboard-container view-fade">
        <header className="dashboard-header">
          <div>
            <p className="greeting-label">Your Focus Board</p>
            <h1 className="greeting-name">{displayName}</h1>
          </div>
          <div className="profile-menu-wrap" ref={profileRef}>
            <button
              className={`profile-button ${profileOpen ? 'open' : ''}`}
              type="button"
              aria-label="Open profile menu"
              aria-expanded={profileOpen}
              onClick={() => setProfileOpen((open) => !open)}
            >
              <span className="avatar-initial">{profileInitial}</span>
              <span className="profile-bell" aria-hidden="true">
                <IconBell />
              </span>
              <span className="profile-chevron" aria-hidden="true">
                <IconChevronDown />
              </span>
            </button>

            {profileOpen && (
              <div className="profile-dropdown view-fade" role="menu" aria-label="Profile menu">
                <div className="profile-summary">
                  <span className="profile-summary-avatar">{profileInitial}</span>
                  <div>
                    <p className="profile-summary-name">{displayName}</p>
                    <p className="profile-summary-email">{displayEmail}</p>
                  </div>
                </div>

                <button type="button" className="profile-action" role="menuitem">
                  <IconUser />
                  <span>View Profile</span>
                </button>
                <button type="button" className="profile-action" role="menuitem">
                  <IconCog />
                  <span>Preferences</span>
                </button>
                <button
                  type="button"
                  className="profile-action danger"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  <IconLogout />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </header>

        <section className="category-strip" aria-label="Task categories">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              className={`category-chip ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {activeCategory === category.key ? (
                <>
                  <span className="chip-value">{category.value}</span>
                  <span className="chip-text">{category.label}</span>
                </>
              ) : (
                <span className="chip-icon" role="img" aria-label={category.label}>
                  {category.icon}
                </span>
              )}
            </button>
          ))}
        </section>

        <section className="hero-card view-fade">
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-top-row">
            <div className="hero-icon" aria-label="featured task">
              <IconClipboard />
            </div>
            <div>
              <p className="metric-label">Main Focus</p>
              <h2>{featuredTask?.title || 'Create your first task'}</h2>
            </div>
          </div>
          <p className="hero-description">
            {featuredTask?.description ||
              'Use the task composer to add your first task and start tracking progress.'}
          </p>

          <div className="hero-metrics-grid">
            <div className="bento-metric-card">
              <div className="bento-icon">
                <IconTarget />
              </div>
              <div>
                <p className="metric-label">Portion</p>
                <p className="metric-value">{pendingTasks} open tasks</p>
              </div>
            </div>
            <div className="bento-metric-card">
              <div className="bento-icon">
                <IconSpark />
              </div>
              <div>
                <p className="metric-label">Texture</p>
                <p className="metric-value">{completionRate}% complete</p>
              </div>
            </div>
          </div>

          <div className="hero-alert-box">
            {highPriorityTasks > 0
              ? `${highPriorityTasks} high-priority task${highPriorityTasks > 1 ? 's' : ''} need attention today.`
              : 'No high-priority blockers right now. Keep your momentum going.'}
          </div>
        </section>

        <section className="feed-section">
          <div className="section-header">
            <h3>Secondary Feed</h3>
            <div className="section-header-actions">
              <p>{filteredTasks.length} items</p>
              <button type="button" className="add-task-button" onClick={openCreateForm}>
                <IconPlus />
                <span>Add Task</span>
              </button>
            </div>
          </div>

          <TaskList
            tasks={filteredTasks}
            onEdit={openEditForm}
            onDelete={handleDeleteTask}
            onToggleStatus={handleToggleStatus}
          />
        </section>

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
      </div>
    </div>
  );
}

export default Dashboard;
