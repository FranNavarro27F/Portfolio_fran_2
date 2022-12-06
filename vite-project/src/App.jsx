import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import menu from "./assets/menu.svg";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='gridContainter'>

    <nav className='nav'>
      <div className='nav__container'>
        <h1 className='nav__logo'>Fran</h1>
        <label className='nav__label' htmlFor="menu" >
          <img className='nav__img' src={menu} alt="no hay imagen" />
        </label>
        <input className='nav__input' type='checkbox' id='menu' />
        <div className='nav__menu'>
          <a className='nav__item' href='#'>Home</a>
          <a className='nav__item' href='#About_me'>About Me</a>
          <a className='nav__item' href='#Skills'>Skills</a>
          <a className='nav__item' href='#My_projects'>My Projects</a>
          <a className='nav__item' href='#Footer'>Get in Touch</a>
        </div>
      </div>
    </nav>


    <a name='Home'></a>
    <div className='Header'>
      <h1>Header</h1>
    </div>

    <a name='About_me'></a>
    <div className='About_me'>
      <h1>Abut me</h1>
    </div>

    <a name='Skills'></a>
    <div className='Skills'>
      <h1>Skills</h1>
    </div>

    <a name='My_projects'></a>
    <div className='My_projects'>
      <h1>My projects</h1>
    </div>

    <a name='Footer'></a>
    <div className='Footer'>
      <h1>Footer</h1>
    </div>

   </div>
  )
}

export default App
