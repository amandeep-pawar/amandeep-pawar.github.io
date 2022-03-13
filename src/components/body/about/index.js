import React from 'react';
import SocialContact from '../../common/social-contact';

import './about.css';

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>

              Hi! Amandeep singh <br/><span className='info-name'>Psawar.</span>
            </div>
                 <div className='about-photo'>
              <img className='picture' src={require("../../../assests/Students-amico.png")} alt='aman.png'/>
             
                 </div>
              
        </div>
        <SocialContact/>
      </div>
  )
}

export default About