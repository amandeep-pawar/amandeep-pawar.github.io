import React from 'react'
import Seperator from '../../common/seperator'
import SocialContact from '../../common/social-contact'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Seperator/>
      <label className='section-title'>Contact</label>
            <div className='contact-container'>
                  
                  <div className='contact-left'>
                    want to get in Touch?
                    <SocialContact/>
                    </div>

                    <div className='download'>
                      <a download href='../../../assests/documents/joining.pdf'>
                        <i className='fi-rr-cloud-download download-icon'/>Download Resume
                          
                       
                        </a>
                      </div>

            </div>
      </div>
  )
}

export default Contact