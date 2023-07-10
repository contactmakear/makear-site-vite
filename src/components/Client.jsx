import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../index.css'
import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

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

const Client = () => {
  return (
    <>
  <h1 className='whatyouget  mb-10 gap-10'>Our Trusted Partners</h1>
      <div className="mt-6 flex flex-wrap gap-10">
       <div className='client'>
        <img className='brad' src='./src/assets/tech/mondelez.png'/>
        <img className='brad' src='./src/assets/tech/kitkat.png'/>
        <img className='brad' src='./src/assets/tech/reliance.png'/>
        <img className='brad' src='./src/assets/tech/surf excel.png'/>
        <img className='brad' src='./src/assets/tech/nestle.png'/>
        <img className='brad munc' src='./src/assets/tech/munch.png'/>
        <img className='brad' src='./src/assets/tech/colpal.png'/>
        <img className='brad ' src='./src/assets/tech/HUL.png'/>
        <img className='brad' src='./src/assets/tech/lactogen.png'/>
        <img className='brad ' src='./src/assets/tech/nescafe.png'/>
        <img className='brad' src='./src/assets/tech/milkybar.png'/>
        <img className='brad' src='./src/assets/tech/nan exella pro.png'/>
        <img className='brad' src='./src/assets/tech/nangrow.png'/>
        <img className='brad' src='./src/assets/tech/ogilvy.png'/>
        <img className='brad' src='./src/assets/tech/street art for mankind.png'/>
        <img className='brad' src='./src/assets/tech/mongos.png'/>
        <img className='brad ' src='./src/assets/tech/ajio.png'/>
        <img className='brad' src='./src/assets/tech/mondelez.png'/>



       </div>
      </div>
    </>
  );
}

export default SectionWrapper(Client);