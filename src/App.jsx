import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Interest from './components/Interest'
import End from './components/End'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='profile-card'>
    <Info></Info>
    <About></About>
    <Interest></Interest>
    <End></End>
    </div>
    
  )
}

export default App
