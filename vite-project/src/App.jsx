import React,{ useState, useRef, useContext } from 'react';
import './App.css'
import fran_logo_claro from "./assets/fran-dev-logo-claro.png";
import fran_logo_negro from "./assets/fran-dev-logo-negro.png";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import eng_flag from "./assets/gran-bretaña2.png";
import spa_flag from "./assets/españa2.png";
import { IntlProvider, FormattedMessage } from 'react-intl';
import MessagesSpanish from './languages/es-MX.json';
import MessagesEnglish from './languages/en-US.json';
import { langContext } from './context/langContext';

function App() {

  let language= useContext(langContext);

  let [mode, setMode]= useState("dark");
  let logos= mode === "dark" ? fran_logo_claro : fran_logo_negro;

  const handleMode= ()=> {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  const button_Dark_Light_ref= useRef(null);
  const dark_light_active_ref= useRef(null);
 
  const switch_mode= ()=> {
    if(button_Dark_Light_ref.current.className === ""){
      button_Dark_Light_ref.current.className = "light"
    }else if(button_Dark_Light_ref.current.className === "light"){
      button_Dark_Light_ref.current.className= "dark"
    }else if(button_Dark_Light_ref.current.className === "dark"){
      button_Dark_Light_ref.current.className= "light"
    }

    if(mode === "dark"){
       setMode("light")
    }else if(mode === "light"){
      setMode("dark")
    }

    if(dark_light_active_ref.current.className === "switch"){
      dark_light_active_ref.current.className= "switch active";
      return;
    }
    if(dark_light_active_ref.current.className === "switch active"){
      dark_light_active_ref.current.className= "switch";
      return;
    }

  };


  return (
    
    <div ref={button_Dark_Light_ref}>
      <div className='gridContainter'>

        <nav className='nav'>

          <div className='nav__container__logo'>
            <div className='logo'>
              <img className='nav__logo' src={logos} alt="logo" />
              <span>Francisco Navarro</span>
            </div>
          </div>

          <div className='nav__container__lang-and-dark'>
            <div className='language'>
              <div>
                <button onClick={()=> language.establecerLenguaje('en-US')}>
                  <img src={eng_flag} alt="United Kingdom" />
                </button>
              </div>
              <div>
                <button onClick={()=> language.establecerLenguaje('es-MX')}>
                  <img src={spa_flag} alt="España" />
                </button>
              </div>
            </div>
            <input className='nav__input' type='checkbox' id='menu' />
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

          <div className='nav__container__navs'>
            <div className='nav__menu'>
              <a className='nav__item' href='#'>
                <FormattedMessage
                  id= 'app.nav_menu_1'
                  defaultMessage= 'Home'
                />
              </a>
              <a className='nav__item' href='#About_me'>
                <FormattedMessage
                  id= 'app.nav_menu_2'
                  defaultMessage= 'About Me'
                />
              </a>
              <a className='nav__item' href='#Skills'>
                <FormattedMessage
                  id= 'app.nav_menu_3'
                  defaultMessage= 'Skills'
                />
              </a>
              <a className='nav__item' href='#My_projects'>
                <FormattedMessage
                  id= 'app.nav_menu_4'
                  defaultMessage= 'My Projects'
                />
              </a>
              <a className='nav__item' href='#Footer'>
                <FormattedMessage
                  id= 'app.nav_menu_5'
                  defaultMessage= 'Get in Touch'
                />
              </a>
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
    </div>
  
  )
}

export default App
