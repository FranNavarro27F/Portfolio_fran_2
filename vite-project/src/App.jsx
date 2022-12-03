import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Logo_fran from './assets/fran-dev-logo-claro.png';

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
         >
          {/* menu icon-------------------------------  */}
          <svg className='menu' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          {/* ----------------------------------------- */}

          {/* menu icon close-------------------------- */}
          <svg className='close' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          {/* ----------------------------------------- */}
        </label>
        <ul className='nav__menu'>
          <li><a href="#"><img className='logo_fran' src={Logo_fran} alt="logo" /></a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">My projects</a></li>
          <li><a href="#">Contact me</a></li>
          
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
