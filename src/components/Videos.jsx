import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../index.css'
import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import gif1 from '../assets/cadbury pop heart_VP9.webm'
import gif2 from '../assets/phone-screen_VP9.webm'
import gif3 from '../assets/ponds_VP9.webm'
import gif4 from '../assets/spotless-runner_VP9.webm'





const ServiceCard = ({ index, title, icon }) => {
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

const Videos = () => {
  return (
    <>
  {/* <h1 className='whatyouget  mb-10 gap-10'>Our Works So For</h1> */}
      <div className="mt-6 flex flex-wrap gap-10">
       <div className='Videos'>
       <video  className='vid' loop autoPlay muted>
        <source  src={gif1} type="video/webm" />
      </video>
      <video className='vid'  loop autoPlay muted>
        <source   src={gif2} type="video/webm" />
      </video>
      <video className='vid' loop autoPlay muted>
        <source  src={gif3} type="video/webm" />
      </video>
      <video className='vid' loop autoPlay muted>
        <source  src={gif4} type="video/webm" />
      </video>
      


       </div>
      </div>
    </>
  );
}

export default SectionWrapper(Videos);