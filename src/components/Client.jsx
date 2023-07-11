import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../index.css'
import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import nestle from '../assets/tech/nestle.png'
import mondelez from '../assets/tech/mondelez.png'
import colpal from '../assets/tech/colpal.png'
import nangrow from '../assets/tech/nangrow.png'
import munch from '../assets/tech/munch.png'
import surf  from '../assets/tech/surf excel.png'
import street   from '../assets/tech/street art for mankind.png'
import ogilvy   from '../assets/tech/ogilvy.png'
import milkybar   from '../assets/tech/milkybar.png'
import lactogen   from '../assets/tech/lactogen.png'
import nescafe   from '../assets/tech/nescafe.png'
import ajio   from '../assets/tech/ajio.png'
import hul  from '../assets/tech/HUL.png' 
import kitkat  from '../assets/tech/kitkat.png'
import nan  from '../assets/tech/nan exella pro.png'
import reliance  from '../assets/tech/reliance.png'
import colgate from '../assets/tech/colgate.png'
import comfort from '../assets/tech/comfort.png'
import dairymilk from '../assets/tech/dairymilk.png'
import ponds from '../assets/tech/ponds.png'









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
  <h1 className='whatyouget  mb-10 gap-10'>Trusted By</h1>
      <div className="mt-6 flex flex-wrap gap-10">
       <div className='client'>
       <img className='brad' src={mondelez}/>
        <img className='brad' src={nestle}/>
        <img className='brad' src={colpal}/>
        <img className='brad' src={munch}/>
        <img className='brad' src={surf}/>
        <img className='brad munc' src={street}/>
        <img className='brad' src={ogilvy}/>
        <img className='brad ' src={milkybar}/>
        <img className='brad' src={lactogen }/>
        <img className='brad ' src={nescafe}/>
        <img className='brad' src={ajio}/>
        <img className='brad' src={hul}/>
        <img className='brad' src={kitkat}/>
        <img className='brad' src={nan}/>
        <img className='brad' src={reliance}/>
        <img className='brad' src={ponds}/>
        <img className='brad ' src={dairymilk}/>
        <img className='brad' src={colgate}/>
        <img className='brad' src={comfort}/>




       </div>
      </div>
    </>
  );
}

export default SectionWrapper(Client);