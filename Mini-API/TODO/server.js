const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // for parsing application/json

// In-memory storage for todos (can be replaced with a database)
let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Create a To-Do App' },
];

// Routes

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));

  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`ToDo app listening at http://localhost:${port}`);
});
