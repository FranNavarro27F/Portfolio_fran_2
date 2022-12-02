import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='gridContainter'>

    <div className='NavBar'>
      <h1 className='NavBar_h1'>
      <a href="#" className='NavBar_a'>Suscríbete NavBar</a>
      </h1>
      <button className='NavBar_button'>
        <svg className='NavBar_svgMenu' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

      <nav className='NavBar_nav'>
        <ul className='NavBar_ul'>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
          <li className='NavBar_li'><a href="#">Item</a></li>
        </ul>
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
