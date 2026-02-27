const express = require('express');
const { body } = require('express-validator');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');

const router = express.Router();

const taskValidation = [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('status')
    .optional()
    .isIn(['pending', 'completed'])
    .withMessage('Status must be pending or completed'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid date'),
];

const createTaskValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  ...taskValidation.slice(1),
];

router.use(protect);

router.route('/').post(createTaskValidation, createTask).get(getTasks);

router
  .route('/:id')
  .get(getTaskById)
  .put(taskValidation, updateTask)
  .delete(deleteTask);

module.exports = router;
