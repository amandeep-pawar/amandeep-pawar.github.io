import React from 'react';
import Project from './projects/index.js';
import Skills from './skills/index.js';
import About from './about/index.js';
import Work from './work/index.js';
import Contact from './contact/index.js';

import './body.css'

function Body() {
  return (
    <div className='body'>

      <section  id='about'><About/></section> 
      <section id='projects'><Project/></section> 
      <section id='skills'><Skills/></section> 
      <section id='work'><Work/></section> 
      <section  id='contact'><Contact/></section> 
      
    
    </div>
  )
}

export default Body