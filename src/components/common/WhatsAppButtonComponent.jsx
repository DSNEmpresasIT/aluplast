import React, { useState } from 'react';
import WppIcon from '../../assets/img/wpp-icon.png';
import WppIconHead from '../../assets/img/ws-head.png';
import LinkWpButton from './LinkWpButton';
import PhonesData from '../../utils/data/wppButtonData';

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);
  return (
    <>
      {
        isLinksDisplayActive 
          ? (
            <div 
              className='whatsapp-chat-container animate__animated animate__fadeIn' 
              style={{ display: isLinksDisplayActive ? 'flex' : 'none' }}
            >
              <div className='container-header'>
                <img src={WppIconHead} width="70px" alt="ws-logo" />
                <span className='title-header'>
                  ¡Comunícate 
                  <br />
                  con nosotros!
                </span>
                <button className='close-button-header' onClick={() => setIsLinksDisplayActive(false)}> 
                  X
                </button>
              </div>
              <div className='container-body'>
                <div className='body-overflow'
                >
                  {
                    PhonesData.map((data, i )=> <LinkWpButton data={data} index={i} />)
                  }
                </div>  
              </div>
            </div>
          )
          : (
            <div 
              className='whatsapp-glove-button animate__animated animate__fadeInUp' 
              onClick={() => setIsLinksDisplayActive(!isLinksDisplayActive)}
            >
              <img src={WppIcon} width={35} alt="whatsapp" />
            </div>
          )
      }
    </>
  )
}

export default WhatsAppButtonComponent;
