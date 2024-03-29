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
import { useEffect } from 'react';
import img_cv from './assets/cv_img.jpg';
import img_work from './assets/check2-circle.svg';
import img_clock from './assets/hourglass-split.svg';
import cv from './downloads/cv_2023_03_[20-03-2023].pdf';
import github_claro from './assets/github_claro.svg';
import github from './assets/github.svg';
import Skills_card from './components/Skills_card';
import { skills } from './components/json/skills.json';
import Project_card from './components/Project_card';
import {projects} from './components/json/projects.json';




function App() {

  let language= useContext(langContext); 
  let modeStorage= localStorage.getItem('mode');
  
  const lang= localStorage.getItem('lang');
  

  let [close_flag, setClose_flag]= useState(false);
  let [mode, setMode]= useState(modeStorage ? modeStorage : "dark");
  let [language_state, setLanguage_state]= useState(lang ? lang : "en-US");
  
  let logos= mode === "dark" ? fran_logo_claro : fran_logo_negro;
  let GitHub_icon= mode == "dark" ? github_claro : github ;
  
  const handleMode= ()=> {
    // mode === "dark" ? setMode("light") : setMode("dark");
    if(mode === "dark"){
      setMode("light")
      localStorage.setItem('mode', 'light')
    }else {
      setMode("dark")
      localStorage.setItem('mode', 'dark')
    }
  };

  const button_Dark_Light_ref= useRef(null);
  const dark_light_active_ref= useRef(null);
  
  const switch_mode= ()=> {
    if(button_Dark_Light_ref.current.className === ""){
      button_Dark_Light_ref.current.className = "light"
      localStorage.setItem('mode', 'light')
    }else if(button_Dark_Light_ref.current.className === "light"){
      button_Dark_Light_ref.current.className= "dark"
      localStorage.setItem('mode', 'dark')
    }else if(button_Dark_Light_ref.current.className === "dark"){
      button_Dark_Light_ref.current.className= "light"
      localStorage.setItem('mode', 'light')
    }
    if(mode === "dark"){
       setMode("light")
       localStorage.setItem('mode', 'light')
    }else if(mode === "light"){
      setMode("dark")
      localStorage.setItem('mode', 'dark')
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

  let handleLangState= ()=>{
    if(language_state === "en-US"){
      setLanguage_state("es-MX")
    }else if(language_state === "es-MX"){
      setLanguage_state("en-US")
    }
  };

  return (
    <div className={mode}  ref={button_Dark_Light_ref}>
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
                      <span><img src={moon} alt="moon"  id='moon_1'/></span>
                      </button>
                    </div>
                  <div className='language'>
                    <div>
                      <button onClick={()=> {language.establecerLenguaje('en-US'), handleLangState()}}>
                        <img src={eng_flag} alt="United Kingdom" />
                      </button>
                    </div>
                    <div>
                      <button onClick={()=> {language.establecerLenguaje('es-MX'), handleLangState()}}>
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
          <div id='home'>
            <div className='home_content_1' >
              
              <div id='home_div_1_part1'>
                <p>
                  <FormattedMessage
                    id= 'app.home_part_1'
                    defaultMessage= 'Hello I am'
                    />
                </p>
              </div>

              <div id='home_div_1_part2'>
                <p>
                  <FormattedMessage
                    id= 'app.home_part_2'
                    defaultMessage= 'Francisco'
                  />
                </p>
              </div>

              <div id='home_div_1_part2_1-2'>
                <p>
                  <FormattedMessage
                    id= 'app.home_part_2_1-2'
                    defaultMessage= 'Navarro'
                  />
                </p>
              </div>

              <div id='home_div_1_part3'>
                <p>
                  <FormattedMessage
                    id= 'app.home_part_3'
                    defaultMessage= 'and I am a'
                  />
                </p>
              </div>

              <div id='home_div_1_part3_1-2'>
                <p>
                  <FormattedMessage
                    id= 'app.home_part_3_1-2'
                    defaultMessage= 'Full Stack Web Developer'
                  />
                </p>
              </div>

            </div>
          </div>
        </section>


        <section className='About_me' id='About_me'>
          <div id='about_me'>

            <div className='about_me_content_1'>
                <div className='titles'>
                  <p>
                    <FormattedMessage
                      id= 'app.about_me_content_1_title'
                      defaultMessage= 'About me'
                    />
                  </p>
                </div>
            </div>

            <div className='about_me_content_2'>
                <div className='about_me_img'>
                  <img src={img_cv} alt="img_cv" />
                </div>
            </div>

            <div className='about_me_content_3'>
                <div className='about_me_description'>
                  <span>
                  <FormattedMessage
                    id= 'app.about_me_content_3'
                    defaultMessage= 'My name is Francisco, I´m 27 years old and I´m from the city of Mar del Plata. Passionate about Technology and taking my first steps in web development.'
                  />
                  </span>
                </div>
            </div>

            <div className='about_me_content_4'>
                <div className='about_me_status'>
                  <img src={img_work} alt="#" />
                  <p>
                    <FormattedMessage
                      id= 'app.about_me_content_4_part_1'
                      defaultMessage= 'Status'
                    />
                  </p>
                  <p id='Open_to_work_p_2'>
                  <FormattedMessage
                    id= 'app.about_me_content_4_part_2'
                    defaultMessage= 'Open to work'
                  />
                  </p>
                </div>
            </div>

            <div className='about_me_content_5'>
                <div className='about_me_availability'>
                  <img src={img_clock} alt="#" />
                  <p>
                    <FormattedMessage
                      id= 'app.about_me_content_5_part_1'
                      defaultMessage= 'Availability'
                    />
                  </p>
                  <p id='availability_p_2'>
                    <FormattedMessage
                      id= 'app.about_me_content_5_part_2'
                      defaultMessage= 'Part-time'
                    />
                  </p>
                </div>
            </div>

            <div className='about_me_content_6'>
                <div className='about_me_button'>
                  <button>
                    <a href={cv} download>
                      <FormattedMessage
                        id= 'app.about_me_content_6_button'
                        defaultMessage= 'Download Resume'
                      />
                    </a>
                  </button>
                </div>
            </div>

          </div>
        </section>


        <section className='Skills' id='Skills'>
          <div id='skills'>

            <div className='skills_content_0'>
              <div className='titles'>
                <p>
                  <FormattedMessage
                        id= 'app.skills_title'
                        defaultMessage= 'Skills'
                      />
                </p>
              </div>
            </div>
              {
                skills.map((cur)=> {
                  return(
                    <Skills_card
                      img= {cur.img}
                      name= {cur.name}
                      key= {cur.name}
                    />
                  )
                })
              }
            <div className='skills_content_1'>
              <img src={GitHub_icon} alt="GitHub" />
              <p>GitHub</p>
            </div>
           
          </div>
        </section>


        <section className='My_projects' id='My_projects'>
          <div id='my_projects'>
            <div className='my_projects_content_1'>
            <div className='titles'>
                  <p>
                    <FormattedMessage
                      id= 'app.my_projects_content_1_title'
                      defaultMessage= 'My Projects'
                    />
                  </p>
                </div>
            </div>
              {
                projects.map(cur=> {
                  return (
                    <Project_card 
                      name= {cur.name}
                      img= {cur.img}
                      description= {language_state === "en-US" ? cur.description_en : cur.description_es}
                      link_deploy= {cur.link_deploy}
                      link_repository= {cur.link_repository}
                    />
                  )
                })
              }
            <div className='my_projects_content_2'>

            </div>
          </div>
        </section>

       
        <section className='Footer' id='Footer'>
          <div id='footer'>
            
              
                <a href="https://www.linkedin.com/in/fran-navarro-/">
                  <div className='footer_contact_button'>
                    <img src="button_footer/linkedin.svg" alt="GitHub_img" />
                    <p>LinkedIn</p> 
                  </div>
                </a> 
              
               <a href="https://github.com/FranNavarro27F">
                <div className='footer_contact_button'>
                  <img src="./button_card_my_project/link_github.svg" alt="" />
                  <p>GitHub</p> 
                </div>
               </a> 
              
              
               <a href="mailto:fran27dev@gmail.com">
                <div className='footer_contact_button'>
                  <img src="./button_footer/mail.svg" alt="" />
                  <p>Mail</p>
                </div>
               </a>
                
              
          </div>
        </section>


      </div>
    </div>
  
  )
}

export default App
