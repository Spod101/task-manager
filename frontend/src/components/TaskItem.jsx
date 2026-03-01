import '../styles/TaskItem.css';

function TaskItem({ task, onEdit, onDelete, onToggleStatus }) {
  const priorityClass = `priority-${task.priority}`;
  const statusClass = task.status === 'completed' ? 'completed' : '';

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className={`task-item ${statusClass}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.status === 'completed'}
          onChange={() => onToggleStatus(task)}
        />
      </div>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <span className={`task-priority ${priorityClass}`}>{task.priority}</span>
          {task.dueDate && (
            <span className="task-due-date">Due: {formatDate(task.dueDate)}</span>
          )}
        </div>
      </div>
      <div className="task-actions">
        <button className="btn btn-small" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="btn btn-small btn-danger" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
