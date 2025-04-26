import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add other routes as needed */}
    </Routes>
  )
}

export default App
