
import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);

// wrong way to connect with backend
// backend will be hitting again and again in infinite loop
  fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(err => console.log(err))
// above code will have bug in future

  return (
    <div className="container">
      <h1>Todo App</h1>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  )
}

export default App
