import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone:'',
    message: '',
  });
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_i4i9grq', 
      'template_krxsrmd', 
      {
        from_name: form.name,
        to_name: 'MakeAr',
        from_email: form.email,
        to_email: 'syed.riyaz@makear.io',
        message: form.message
      },
      '5wab_RtRe2V53wGPB'
      ).then(() => {
        setLoading(false);
        // alert("Thank you for letter");
      //  setTimeout(()=>{
      //   document.getElementById('alertNoti').style.display="block"
      //  },3000)

        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong..");
      });
  };
  const redirectToEmail = () => {
    window.location.href = 'mailto:contact@makear.io';
  };
  // const openContact = ()=>{
  //   alert("phoneNumber = +9818051166")
  // }
  const phoneNumber = '+9818051166';
  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
      
       

      
      </motion.div> */}
  <div class="footer-content">
    
            {/* <h3>MakeAr</h3> */}
            {/* <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p> */}
            <ul class="socials">
                <li><a onClick={redirectToEmail} href="mailto:contact@makear.io"><i class="fa fa-envelope"></i></a>  <span className='icons'>      contact@makear.io</span></li>
                <li><a href={`tel:${phoneNumber}`}><i class='fa fa-phone'></i></a><span className='icons'>      Contact : 9818051166</span></li>
                <li><a href="https://www.linkedin.com/company/makear-io/mycompany/"><i class="fa fa-linkedin-square"></i></a><span className='icons'>     Reach us @Linkedln</span></li>
               <div>
           
               </div>
            </ul>
            
        </div>
    
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-[450px] md:h-[450px] h-[250px]"
      >
       
        <EarthCanvas />
       
      </motion.div>
      {/* <div className='whatsp'>
        <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/>
      </div>    */}

     
    </div>
   
    <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
    <i className="fa fa-angle-double-up"></i>
      </button>

     
    </>

  );
}

export default SectionWrapper(Contact, "contact");