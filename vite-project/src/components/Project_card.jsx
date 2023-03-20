import React, { useState } from 'react';
import './css/Project_card.css';


export default function Project_card({name, img, description, link_deploy, link_repository}) {
  let [down, setDown]= useState(false);
  let down_var= false;

  const showHideDesc= () => {
    if(!down){
      return setDown(true);
    }
    if(down){
      return setDown(false);
    }
  }

  return (
    <div className='project_card'>
        <div className='card_content_1'>
          <img src={img} alt={name} />
        </div>
        <div className='card_content_2'>
          <button 
            id='card_content_2_button'
            onClick={ ()=> showHideDesc()}
            className={down && 'card_content_2_activeButton'}
            ><img src="button_card_my_project/link_down.svg" alt="" /></button>
          <span>
            {name} :
            <br />
            { down && description}
          </span>
        </div>
        <div className='card_content_3'>
          <div className='card_project_button_1'>
            <button><a href={link_deploy}>
                <img src="button_card_my_project/link_demo.svg" alt="" /> Demo
              </a></button>
          </div>
          <div className='card_project_button_2'>
            <button><a href={link_repository}>
                <img src="button_card_my_project/link_github.svg" alt="" /> Repository
              </a></button>
          </div>
        </div>
    </div>
  )
}
