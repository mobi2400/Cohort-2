import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/todos/')
    .then(res => {
      setTodos(res.data.todos)
    })
    .catch(err => {
      console.log(err)
    })
    
  },[])
  

  return (
    <>
      {todos.map((todo) => (
        <Todo 
         key={todo.id}
          todo={todo.todo}
        />
      ))}
    </>
  )
}

export default App
