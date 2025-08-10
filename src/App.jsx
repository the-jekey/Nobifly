import React, { useState } from 'react';
import Main from './Components/Main';
import Service from './Components/Service';
import About from './Components/About';
import Footer from './Components/Footer';
import Work from './Components/Work';
import Marquee from './Components/Marquee';
import Loading from './Components/Loader';
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './Components/Loader';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <div className="selection:text-black selection:bg-white">

        <div className='w-full h-full relative overflow-hidden'>
          <Main MenuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Service />
          <About />
          <Work />
          <Marquee />
          <Footer />
          <Loading />
        </div>
      </div>
    </>
  );
};

export default App; 