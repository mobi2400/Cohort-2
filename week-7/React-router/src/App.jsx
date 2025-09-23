import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import Appbar from './components/Appbar'
function App() {

  return (
    <>
    <div>
    <navbar>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </navbar>
      <div>
        <button onClick={() => { 
          window.location.href = "/"
        }}>Home</button>
        <button onClick={() => {
          window.location.href = "/dashboard"
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Appbar /> {/* solve all rerendering issue */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
