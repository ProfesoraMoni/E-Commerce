import React from 'react';
import '../Components/Contactos.css'

function Contactos() {
    const whatsappLink = 'https://wa.me/message/Q4OVJBLMKI3RN1';
    const whatsappimage ='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'; 
    const facebookLink = 'https://www.facebook.com/groups/382172052552184'; 
    const facebookImage = 'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png';
    const githubLink = 'https://github.com/AndresGarciaT';
    const githubLogo = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
    return (
        <div className="whatsapp-container"> 
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img className='contacimg' src={whatsappimage} alt="WhatsApp" />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
        <img className="contacimg" src={facebookImage} alt="Facebook" />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="contacimg" src={githubLogo} alt="GitHub" />
      </a>
      </div>
    );
  }
  export default Contactos;