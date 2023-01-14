import React from 'react'

export default function Project_card({name, img, description, link_deploy, link_repository}) {
  return (
    <div className='project_card'>
        <div className='card_content_1'>
          <img src={img} alt={name} />
        </div>
        <div className='card_content_2'>
          <span>
            {description}
          </span>
        </div>
        <div className='card_content_3'>
          <button><a href={link_deploy}>Demo</a></button>
        </div>
        <div className='card_content_4'>
          <button><a href={link_repository}>Repository</a></button>
        </div>
    </div>
  )
}
