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
                          <marquee> .............update is going on - Portfolio...............</marquee>
                      </div>
                       

                 </div>
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