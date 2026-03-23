import '../styles/TaskItem.css';

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 15c0-5 4.5-8 11-8 0 6.5-3 11-8 11-1.6 0-3-1.2-3-3Z" />
    <path d="M8 16c2-2.2 4.4-4 8-5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
    <path d="m4 12 8 4 8-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4 16 8 4 8-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z" />
  </svg>
);

const IconEdit = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5Z" />
    <path d="m13.5 7 3.5 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconTrash = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 7h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 7V5h6v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 7v12h8V7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCheckCircle = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="m8.5 12 2.4 2.4 4.6-4.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function TaskItem({ task, onEdit, onDelete, onToggleStatus }) {
  const priorityClass = `priority-${task.priority}`;
  const statusClass = task.status === 'completed' ? 'completed' : '';
  const iconByPriority = {
    low: <IconLeaf />,
    medium: <IconLayers />,
    high: <IconBolt />,
  };

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString();
  };

  return (
    <article className={`task-item ${statusClass} view-fade`}>
      <div className={`task-icon-box ${priorityClass}`}>
        <span aria-label={`${task.priority} priority`}>
          {iconByPriority[task.priority] || <IconLayers />}
        </span>
      </div>

      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}

        <div className="task-meta">
          <span className={`task-priority-pill ${priorityClass}`}>{task.priority}</span>
          {task.dueDate && (
            <span className="task-due-date">Due {formatDate(task.dueDate)}</span>
          )}
        </div>

        <div className="task-inline-actions">
          <button className="icon-action" onClick={() => onEdit(task)} aria-label="Edit task">
            <IconEdit />
          </button>
          <button
            className="icon-action danger"
            onClick={() => onDelete(task._id)}
            aria-label="Delete task"
          >
            <IconTrash />
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`status-toggle ${task.status === 'completed' ? 'is-complete' : ''}`}
        onClick={() => onToggleStatus(task)}
        aria-label={task.status === 'completed' ? 'Mark pending' : 'Mark complete'}
      >
        <IconCheckCircle />
      </button>
    </article>
  );
}

export default TaskItem;
