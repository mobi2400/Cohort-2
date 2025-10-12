import './App.css'
import { useState, useEffect} from 'react'
import CustomHook from './components/Hooks'
import MyComponent from './components/UseEffect'
  
function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
       setShow(show => !show);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {show?<CustomHook />:<div>Done</div>}
      {show ?<MyComponent  />:<div>unmouted</div>}
    </div>
  )
  

}

export default App
