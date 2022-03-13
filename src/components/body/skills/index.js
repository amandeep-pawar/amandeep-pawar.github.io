import React from 'react'
import Seperator from '../../common/seperator'
import { SkillData } from '../../data/skills';
import SkillCard from './skill-card';

import './skill.css';

function Skills() {

  const data= SkillData;
  return (
    <div className='skills'>
      <Seperator/>
      <label className='section-title'>Skills</label>

      <div className='skills-container'>
        {data.map((item)=>{
          return(
            <div className='skills-section'>
            <div className='skills-section-title'>{item.type} </div>
            <div className='skills-list'>
                {item.list.map((skill)=>{
                  return (
                          <SkillCard skill={skill}/>
                  )
                })}
               </div>
            
            </div>
          )
        })}
        </div>
      </div>
  )
}

export default Skills;