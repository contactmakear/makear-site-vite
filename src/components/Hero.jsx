import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';
import rotate from '../assets/tech/rotate.png'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";
import Whatsap from "./whatsap";
const Hero = () => {
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
  return (
    
    <section className={`relative w-full h-screen mx-auto w-3 h-3  bg-primary mb-1`}>
      
     {/* <div>
     <img className="rot" src={rotate} />
     </div> */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full violet-gradient' />
          {/* <div className='w-1 sm:h-80 h-40  #e11b4c voliet-gradient' /> */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />

          {/* <div className='w-1 sm:h-80 h-40  #e11b4c bg-gradient-to-r from-red-900 to-rose-900'violet-gradient /> */}

        </div>
        
        {/* <button  className="scrollBottom" onClick={scrollBottom}>
        <i class='far fa-arrow-alt-circle-down'></i>
      </button> */}
        <div>
          {/* <h1 className={`${styles.heroHeadText} text-white mt-5`}>
            Welcome To <span className='text-[#e11b4c]'>MakeAR</span>
          </h1> */}
          {/* <TypeAnimation className={`${styles.heroSubText} mb-5 text-100 `}
                sequence={[
                  ' Welcome To  ', // Types 'One'
                  1000, // Waits 1s
                  // '', // Deletes 'One' and types 'Two'
                  // 2000, // Waits 2s
                  // '', // Types 'Three' without deleting 'Two'
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '3em',  display: 'inline-block' }}
    /> */}
     {/* <TypeAnimation className={`${styles.heroSubText} mb-5 text-100 text-violet-700`}
                sequence={[
                  ' MakeAR ', // Types 'One'
                  1000, // Waits 1s
                  // '', // Deletes 'One' and types 'Two'
                  // 2000, // Waits 2s
                  // '', // Types 'Three' without deleting 'Two'
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '3em',  display: 'inline-block' }}
    /> */}
    
  
          <h1 className={`${styles.heroHeadText} text-white`}>
          Welcome To<span className='text-[#915EFF]'>  MakeAR</span>
          </h1>
        
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           One Stop Solution For Creative   <br className='sm:block hidden' />
           Tech Marketing 
          </p>
     
          {/* <div className=''>
        <img className="whatsap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/>
      </div>    */}
        </div>
        
      </div>

      <ComputersCanvas />
   
{/* <div>
<img className="whatsap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/>

</div> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* <p>movable model</p> */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            {/* <div className="flex items-end">
          <img className="whatsap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/>
        </div> */}
          </div>
        </a>

       
       
      </div>
      
      {/* <div className="d-flex justify-content-end">
          <img className="whatsap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/>
        </div> */}
    
    </section>
  );
};

export default Hero;