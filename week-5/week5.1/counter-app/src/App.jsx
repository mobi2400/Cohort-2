import './App.css'
import { useState } from 'react' // this will work
function App() {
  const [count, setCount] = useState(0) //[0,1]
 
  return (
    <>
      <div>
        <h1>hii there</h1>
        <button onClick={() => setCount(count + 1)}> counter {count}</button>
      </div>
    </>
  )
}

export default App
