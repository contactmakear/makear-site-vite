import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { technologies } from '../constans';
import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
     
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
            <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
            <BallCanvas className="" icon={technology.icon} />
      </motion.div>
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "");