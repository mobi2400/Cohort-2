import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import CardWrapper from './components/CardWrapper'
import TextComponent from './components/TextComponent'
let count = 4

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Todo 1",
      description: "Description 1",
    },
    {
      id:2,
      title: "Todo 2",
      description: "Description 2",
    },
    {
      id:3,
      title: "Todo 3",
      description: "Description 3",
    }
  ])



  return (
    <>
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>
    <button
    onClick={()=>{
      setTodos([...todos, {
        id:count++,
        title: Math.random(),
        description: Math.random()+1,
      }])

    }}>Add todo</button>
   {todos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
   ))}
    </>
  )
}

export default App
