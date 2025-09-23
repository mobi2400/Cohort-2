import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{console.log('hello')},[])
  

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        count is {count}</button>
    </>
  )
}

export default App
