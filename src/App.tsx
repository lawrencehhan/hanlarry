import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import GrainFilter from './assets/GrainFilter';
import BackgroundLightMask from './assets/background-mask-light.png'
import BackgroundDarkMask from './assets/background-mask-dark-03.png'
import useOnScreen from './hooks/useOnScreen';
import { motion, AnimatePresence } from 'framer-motion';
// import Wave from './assets/Wave';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import DarkToggle from './components/darkToggle/DarkToggle';

export default function App() {
  // Dark-Mode toggle and respective state
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode)
  const handleDarkToggle = (event:React.ChangeEvent) => {
    setDarkMode( prevDarkMode => !prevDarkMode )
    event.stopPropagation()
  }

  // Check for device width
  const [isMobile, setMobile] = useState<boolean>(false)
  const [isFirstBoot, setIsFirstBoot] = useState<boolean>(true)
  useEffect(() => {
      // Check for initial render
      isFirstBoot && setIsFirstBoot(prevIsFirstBoot => !prevIsFirstBoot)
      // Listening for window resizing
      if (window.innerWidth <= 672) {
        setMobile(true)
      }
      window.addEventListener("resize", function() {
        if (window.innerWidth <= 672) {
            setMobile(true)
        } else {
          setMobile(false)
        }
      })
  }, [])

  //// Navbar setup with scroll references
  const homeRef = useRef<null | HTMLDivElement>(null); 
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  // Scrolling Mechanism
  const handleScroll = (target:React.MutableRefObject<HTMLDivElement | null>) => {
    target.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start",
      inline: "nearest"
     })
  }

  // Conditional rendering for homeRef
  const homeIsOnScreen = useOnScreen(homeRef);
  // Check to see if Burger navbar is open
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  console.log(isMobile)

  // Framer-Motion variants for loading background gradient canvas
  const loadingVariants = {
    hidden: { opacity: 0, },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className={`main ${darkMode && "darkMain"}`} 
      // Background png is temporarily disabled until a faster means is available
      // style={{backgroundImage: `url(${darkMode ? BackgroundDarkMask : BackgroundLightMask})`, backgroundSize:'cover'}}
      initial="hidden"
      animate="visible"
      variants={loadingVariants}
      >
      <GrainFilter />
      <Navbar 
        darkMode={darkMode}
        isFirstBoot={isFirstBoot}
        isMobile={isMobile}
        homeIsOnScreen={homeIsOnScreen} 
        handleScroll={handleScroll} 
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleDarkToggle={handleDarkToggle}/>

      <div className={`app`}>
        <Home darkMode={darkMode} homeRef={homeRef} isMobile={isMobile} />
        <About darkMode={darkMode} aboutRef={aboutRef} />
        <Projects darkMode={darkMode} projectRef={projectRef} />
        <Contact darkMode={darkMode} contactRef={contactRef} />
      </div>
      {!isMobile && <DarkToggle darkMode={darkMode} handleDarkToggle={handleDarkToggle}/> }
    </motion.div>
  );
};
