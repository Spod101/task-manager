import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, onToggleStatus }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state view-fade">
        <h4>No tasks in this category</h4>
        <p>Add a new task from the red action button to populate your feed.</p>
      </div>
    );
  }

  return (
    <div className="task-feed">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
