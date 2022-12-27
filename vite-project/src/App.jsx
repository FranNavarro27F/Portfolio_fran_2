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

  let [close_flag, setClose_flag]= useState(false);
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
 
  const handlerCloseMenu= ()=> {
    close_flag === true ? setClose_flag(false) : setClose_flag(true); 
    // setClose_flag(true);
  }

  const menuLinks= document.querySelectorAll('.div_link_g a[href^="#"]');

  const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      const id= entry.target.getAttribute("id");
      const menuLink= document.querySelector(`.div_link_g a[href="#${id}"]`);

      if(entry.isIntersecting){
        document.querySelector('.div_link_g a.nav__item__active')?.classList?.remove("nav__item__active");
        menuLink.classList.add("nav__item__active");
      }else{
        menuLink.classList.remove("nav__item__active");
      }
    });
  }, {rootMargin: "-50% 0px -50% 0px"});

  menuLinks.forEach(menuLink => {
    const hash= menuLink.getAttribute("href");
    const target= document.querySelector(hash);
    if(target){
      observer.observe(target);
    }
  });

  return (
    
    <div ref={button_Dark_Light_ref}>
      <div className='observer-root-margin'></div>
      <div className='gridContainter'>

        <nav className='nav'>

          <div className='nav__container__logo'>
            <div className='logo'>
              <img className='nav__logo' src={logos} alt="logo" />
              <span>Francisco Navarro</span>
            </div>
          </div>

          <div className='nav__img__menu'>
            <label className='nav__label' htmlFor="menu" >
              <img 
                className='nav__img'
                src={ mode === "dark" ? "/menu.svg" : "/menu_light.svg"}
                alt="img_menu"
                onClick={()=> handlerCloseMenu()}
                />
            </label>
            <input 
              className='nav__input'
              type='checkbox'
              id='menu'
              // defaultChecked={close_flag}
              checked={close_flag}
              />
            <div className='nav__menu'>
              <div className='center__light'>
                <div className='nav__container__lang-and-dark'>
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
                </div>
              </div>
              
              <div id='div_link_1' className='div_link_g'>
                <a 
                  href='#Header'
                  id='link_1'
                  onClick={()=> handlerCloseMenu()}
                  >
                  <FormattedMessage
                    id= 'app.nav_menu_1'
                    defaultMessage= 'Home'
                  />
                </a>
              </div>
              <dir id='div_link_2' className='div_link_g'>
                <a 
                  href='#About_me'
                  id='link_2'
                  onClick={()=> handlerCloseMenu()}
                  >
                  <FormattedMessage
                    id= 'app.nav_menu_2'
                    defaultMessage= 'About Me'
                  />
                </a>
              </dir>
              <div id='div_link_3' className='div_link_g'>
                <a 
                  href='#Skills'
                  id='link_3'
                  onClick={()=> handlerCloseMenu()}
                  >
                  <FormattedMessage
                    id= 'app.nav_menu_3'
                    defaultMessage= 'Skills'
                  />
                </a>
              </div>
              <div id='div_link_4' className='div_link_g'>
                <a
                  href='#My_projects'
                  id='link_4'
                  onClick={()=> handlerCloseMenu()}
                  >
                  <FormattedMessage
                    id= 'app.nav_menu_4'
                    defaultMessage= 'My Projects'
                  />
                </a>
              </div>
              <div id='div_link_5' className='div_link_g'>
                <a
                  href='#Footer'
                  id='link_5'
                  onClick={()=> handlerCloseMenu()}
                  >
                  <FormattedMessage
                    id= 'app.nav_menu_5'
                    defaultMessage= 'Get in Touch'
                  />
                </a>
              </div>
            </div>
          </div>

        </nav>



        <section className='Header' id='Header'>
          <h1>Header</h1>
        </section>


        <section className='About_me' id='About_me'>
          <h1>Abut me</h1>
        </section>


        <section className='Skills' id='Skills'>
          <h1>Skills</h1>
        </section>


        <section className='My_projects' id='My_projects'>
          <h1>My projects</h1>
        </section>

       
        <section className='Footer' id='Footer'>
          <h1>Footer</h1>
        </section>


      </div>
    </div>
  
  )
}

export default App
