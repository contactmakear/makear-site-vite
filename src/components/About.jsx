import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../index.css'
import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// var texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
// var currentIndex = 0;
// var delay = 2000; 


const ServiceCard = ({ index, title, icon }) => {

  // function changeText() {
  //   var dynamicText = document.getElementById("dynamicText");
  //   dynamicText.textContent = texts[currentIndex];
  //   currentIndex = (currentIndex + 1) % texts.length;
  // }
  
  // // Set an interval to call the changeText function
  // setInterval(changeText, delay);
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[160px] flex justify-evenly items-center flex-col "
        >
          {/* <img src={icon} alt="service" className="w-24 h-24 object-contain" /> */}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const Whatsap = () => {
    const redirectToWhatsApp = () => {
      window.location.href = 'https://wa.me/7676647262';
    };
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      
      </motion.div>
  
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      MakeAR enables brands to adopt creative AR solutions for better ROI-focused campaigns.Augmented reality marketing enhances customer experiences by overlaying digital content onto the physical world. We design end to end campaigns to make you stand out from your competition. 
      </motion.p>
      <br/>
      {/* <Whatsap /> */}
      {/* <div >
     <img   className='whatsp '
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
      alt="Image"
      onClick={(()=>{      window.location.href = 'https://wa.me/9818051166';
    })} 
     
    />
   </div> */}
      <br/>
  <h1 className='whatyouget  mb-10 gap-10'>What you get</h1>
      <div className="mt-10 flex  flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");