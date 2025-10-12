import { useState } from 'react'
function CustomHook() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <>
    <div>{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </>
  )
}
export default CustomHook;