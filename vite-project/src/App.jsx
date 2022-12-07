import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'
import menu from "./assets/menu.svg";
import fran_logo from "./assets/fran-dev-logo-claro.png";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import React, { useRef } from 'react';

function App() {

  // const buttonRef= useRef(null);
  // // console.log(buttonRef)

  // const switch_mode= ()=> {
  //   buttonRef.current.className= 'rojo';
  // };

  const button_Dark_Light_ref= useRef(null);
  const dark_light_active_ref= useRef(null);
 

  const switch_mode= ()=> {
    if(button_Dark_Light_ref.current.id === ""){
        button_Dark_Light_ref.current.id = "light";
    }else if(button_Dark_Light_ref.current.id === "light"){
      button_Dark_Light_ref.current.id= "dark";
    }else if(button_Dark_Light_ref.current.id === "dark"){
      button_Dark_Light_ref.current.id= "light";
    }

    if(dark_light_active_ref.current.className === "switch"){
      dark_light_active_ref.current.className= "switch active";
      return;
    }
    if(dark_light_active_ref.current.className === "switch active"){
      dark_light_active_ref.current.className= "switch";
      return;
    }
    

  }


  return (
   <div className='gridContainter' ref={button_Dark_Light_ref}>

    <nav className='nav'>
      <div className='nav__container'>
        {/* <h1 className='nav__logo'>Fran</h1> */}
        <div className='logo'>
          <img className='nav__logo' src={fran_logo} alt="logo" />
          <span>Francisco Navarro</span>
        </div>
        <label className='nav__label' htmlFor="menu" >
          <img className='nav__img' src={menu} alt="no hay imagen" />
        </label>
        <input className='nav__input' type='checkbox' id='menu' />


        <div className='nav__menu'>
          <div className='language_and_light-dark'>
            <div className='language'>
              <button className='language-switch'>
                <div><span><h3>English</h3></span></div>
                <div><span><h3>Spanish</h3></span></div>
              </button>
            </div>
            <div className='light-dark'>
              <button
                id='switch'
                className='switch'
                onClick={switch_mode}
                ref={dark_light_active_ref}
                >
                <span><img src={sun} alt="sun" /></span>
               <span><img src={moon} alt="moon" /></span>
              </button>
            </div>
          </div>
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
