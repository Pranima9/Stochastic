// Import the useState hook from React for managing component state
import { useState } from 'react';
// Import the CSS styling file for this component
import './App.css';

// Main App component - manages the todo list application
function App() {
  // State hook: stores array of todo objects; each has id, title, description, and importance level
  const [todos, setTodos] = useState([
    // Initial sample todos loaded when component mounts
    { id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread, and fruits', importance: 'Medium' },
    { id: 2, title: 'Finish project report', description: 'Complete draft and send to team', importance: 'High' },
    { id: 3, title: 'Go for a 30-minute run', description: 'Evening jog in the park', importance: 'Low' }
  ]);

  // State hook: tracks the search query text entered by the user
  const [searchQuery, setSearchQuery] = useState('');
  // State hook: toggles visibility of the "Add Task" form
  const [showAddForm, setShowAddForm] = useState(false);
  // State hook: stores the title input for a new todo task
  const [newTitle, setNewTitle] = useState('');
  // State hook: stores the description input for a new todo task
  const [newDescription, setNewDescription] = useState('');
  // State hook: stores the importance level selected for a new todo (defaults to 'Medium')
  const [newImportance, setNewImportance] = useState('Medium');

  // Event handler: executes when user submits the "Add Task" form
  const handleAddTodo = (e) => {
    // Prevent the form from doing a page reload (default form behavior)
    e.preventDefault();
    // If title is empty or only whitespace, exit early without adding the task
    if (!newTitle.trim()) return;

    // Create a new task object with unique id (based on current timestamp)
    const newTask = {
      id: Date.now(), // Generates unique ID using current time in milliseconds
      title: newTitle.trim(), // Remove leading/trailing spaces from title
      description: newDescription.trim(), // Remove leading/trailing spaces from description
      importance: newImportance // Use selected importance level
    };

    // Add the new task to the beginning of the todos array and update state
    setTodos([newTask, ...todos]);
    // Clear the form input fields after successfully adding the task
    setNewTitle('');
    setNewDescription('');
    setNewImportance('Medium'); // Reset to default importance level
    // Hide the form after task is added
    setShowAddForm(false);
  };

  // Event handler: removes a todo from the list by its id
  const handleDelete = (id) => {
    // Filter out the todo with matching id and update the todos list
    setTodos(todos.filter(t => t.id !== id));
  };

  // Computed value: filters todos based on search query (case-insensitive)
  // Returns todos matching the search in title, description, or importance level
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.importance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSX return: renders the entire todo application UI
  return (
    // Main container div
    <div className="container">
      {/* Page heading */}
      <h1>My Todo List</h1>

      {/* Top section: contains search bar and toggle button for adding new tasks */}
      <div className="top-bar">
        {/* Search input field: updates searchQuery state as user types */}
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search tasks..."
          value={searchQuery}
          // Update state with each keystroke to filter todos in real-time
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Toggle button: shows/hides the add task form */}
        <button
          className="btn-add-toggle"
          // Toggle the showAddForm state between true/false
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {/* Button text changes based on whether form is visible */}
          {showAddForm ? '✕ Close' : '➕ Add Task'}
        </button>
      </div>

      {/* Conditionally render the form only if showAddForm is true */}
      {showAddForm && (
        // Form element: submits to handleAddTodo when user clicks "Add Card"
        <form className="add-form-card" onSubmit={handleAddTodo}>
          <h3>Add New Task Card</h3>
          
          {/* Title input field: required, must have content to submit form */}
          <input
            type="text"
            className="form-control"
            placeholder="Task Title *"
            value={newTitle}
            // Update newTitle state as user types
            onChange={(e) => setNewTitle(e.target.value)}
            required
            autoFocus
          />

          {/* Description textarea: optional, user can leave blank */}
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description or notes (optional)..."
            value={newDescription}
            // Update newDescription state as user types
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>

          {/* Grouped label and select dropdown for importance level */}
          <div className="form-group">
            <label className="form-label">Importance Level:</label>
            {/* Dropdown to choose importance: High, Medium, or Low */}
            <select
              className="form-control"
              value={newImportance}
              // Update newImportance state when user selects a different option
              onChange={(e) => setNewImportance(e.target.value)}
            >
              <option value="High">🔴 High Importance (Level 3)</option>
              <option value="Medium">🟡 Medium Importance (Level 2)</option>
              <option value="Low">🟢 Low Importance (Level 1)</option>
            </select>
          </div>

          {/* Button container: Cancel and Submit buttons */}
          <div className="form-buttons">
            {/* Cancel button: closes form without saving */}
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
            {/* Submit button: calls handleAddTodo to add the task */}
            <button type="submit" className="btn-submit">
              Add Card
            </button>
          </div>
        </form>
      )}

      {/* Grid container: displays all filtered todo cards */}
      <div className="card-grid">
        {/* Conditional rendering: show "no results" message if search returns no todos */}
        {filteredTodos.length === 0 ? (
          <p className="no-tasks">No tasks found matching "{searchQuery}"</p>
        ) : (
          // Loop through filtered todos and render each as a card
          filteredTodos.map(todo => (
            // Each todo card with unique key for React rendering efficiency
            <div key={todo.id} className={`todo-card importance-${todo.importance.toLowerCase()}`}>
              {/* Card header row: displays importance badge */}
              <div className="card-header-row">
                {/* Badge showing importance level with appropriate emoji and color */}
                <span className={`importance-badge badge-${todo.importance.toLowerCase()}`}>
                  {/* Display different emoji and text based on importance */}
                  {todo.importance === 'High' && '🔴 High'}
                  {todo.importance === 'Medium' && '🟡 Medium'}
                  {todo.importance === 'Low' && '🟢 Low'}
                </span>
              </div>

              {/* Card body: displays the todo title and description */}
              <div className="card-content">
                {/* Task title */}
                <h3>{todo.title}</h3>
                {/* Only show description if it exists */}
                {todo.description && <p>{todo.description}</p>}
              </div>

              {/* Delete button: removes this todo from the list */}
              <button
                className="btn-delete"
                // Call handleDelete with this todo's id when clicked
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Export the App component to make it available for use in other files (like main.jsx)
export default App;
