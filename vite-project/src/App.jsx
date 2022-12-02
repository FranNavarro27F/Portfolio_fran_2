import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='gridContainter'>

    <div className='NavBar'>
      <nav className='nav'>
        <input 
          type='checkbox'
          id='nav__checkbox'
          className='nav__checkbox'
        />
        <label
         htmlFor='nav__checkbox'
         className='nav__toggle'
         ></label>
      </nav>
    </div>

    <div className='Header'>
      <h1>Header</h1>
    </div>
    <div className='About_me'>
      <h1>Abut me</h1>
    </div>
    <div className='Skills'>
      <h1>Skills</h1>
    </div>
    <div className='My_projects'>
      <h1>My projects</h1>
    </div>
    <div className='Footer'>
      <h1>Footer</h1>
    </div>

   </div>
  )
}

export default App
