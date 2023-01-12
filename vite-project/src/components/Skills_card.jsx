import React from 'react'
import { skills } from '../components/json/skills.json'
import './css/Skills_card.css'

export default function Skills_card({name, img}) {
  return (
    <div className='skill_card'>
        <div className='skill_card_img'>
            <img src={img} alt={name} />
        </div>
        <div className='skill_card_name'>
            <p>{name}</p>
        </div>
    </div>
  )
}
