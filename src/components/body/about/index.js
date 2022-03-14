import React from 'react';
import SocialContact from '../../common/social-contact';

import './about.css';

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>

              Hi! meet with Amandeep singh <br/><span className='info-name'>Pawar.</span>
                 <b> coding makes me 😀!</b>
                  <div className='quote'>
                    while(no-success)<br/>
                      tryAgian();<br/>
                      
                      if(death){
                        
                    <p>break;</p>
                    
                      }
                      <div className='goal'>
                        <b> Preparing for GATE exam....</b>
                          <marquee> .............Working on update - Portfolio...............</marquee>
                      </div>
                       

                 </div>
            </div>
                 <div className='about-photo'>
              <img className='shadow-lg p-2 mb-4  picture' src={require("../../../assests/amandeep.jpeg")} alt='aman.png'/>
             
                 </div>
              
        </div>
        <SocialContact/>
      </div>
  )
}

export default About