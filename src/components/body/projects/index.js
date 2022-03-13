import React from 'react';
import Seperator from '../../common/seperator';
import { ProjectData } from '../../data/project';
import ProjectCard from './project-card';
import './project.css';

function Project() {

  const data=ProjectData;
  return (
    <div className='projects'>
      <Seperator/>
      <label className='section-title'>Projects</label>
                                 <div>
                                   {data.map((projectItem)=>{
                                     return <ProjectCard project={projectItem}/>
                                   })}

                                 </div>
    </div>
  )
}

export default Project