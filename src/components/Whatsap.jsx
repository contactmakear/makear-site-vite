import React from 'react';
import '../index.css'
const Whatsap = () => {
  const redirectToWhatsApp = () => {
    window.location.href = 'https://wa.me/7676647262';
  };

  return (
   <div >
     <img   className='whatsp'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
      alt="Image"
      onClick={redirectToWhatsApp} 
     
    />
   </div>
  );
};

export default Whatsap;