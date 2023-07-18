import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from './components/Footer';
import Client from './components/Client';
import Videos from './components/Videos';
// import Whatsap from './components/whatsap';
const App = () => {
  return (
    <BrowserRouter>
      <div className='realtive z-0 bg-primary'> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
       
        </div>

        <About />
        <Videos/>
        <Client/>
       

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
     
    </BrowserRouter>
  );
}

export default App;
