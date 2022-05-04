import React, {useState, useRef } from 'react';
import './App.css';
import useOnScreen from './hooks/useOnScreen';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundCanvas from './components/background/BackgroundCanvas';
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

  // Scrolling References
  const homeRef = useRef<null | HTMLDivElement>(null); 
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  // Scrolling Mechanism
  const handleScroll = (target:React.MutableRefObject<HTMLDivElement | null>) => {
    target.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
     })
  }
  // Conditional rendering for homeRef
  const homeIsOnScreen = useOnScreen(homeRef);
  const homeLI = () => {
    const homeRefVariant = {
      hidden: { x: 5, y: 5, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          ease: "easeOut",
          duration: 1,
        }
      },
      hide: {
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        }
      }
    }

    return (
        <motion.li 
          className="li-home" 
          onClick={() => handleScroll(homeRef)}
          initial="hidden"
          animate="visible"
          exit="hide"
          variants={homeRefVariant}>
            <a className="nav-item">Lawrence Han</a>
        </motion.li>  
    )
  }

  return (
    <>
      <BackgroundCanvas />
      {/* <ul className={`navbar ${darkMode && "dark"}`}>
          <AnimatePresence>
            {!homeIsOnScreen && homeLI()}          
          </AnimatePresence>  
          <li onClick={() => handleScroll(aboutRef)}>
              <a className="nav-item">about</a>
          </li>
          <li onClick={() => handleScroll(projectRef)}>
              <a className="nav-item">experience / projects</a>
          </li>
          <li onClick={() => handleScroll(contactRef)}>
              <a className="nav-item">contact</a>
          </li>
      </ul>
      <div className={`app ${darkMode ? "dark" : "" }`}>
        <Home darkMode={darkMode} homeRef={homeRef} />
        <About darkMode={darkMode} aboutRef={aboutRef} />
        <Projects darkMode={darkMode} projectRef={projectRef} />
        <Contact darkMode={darkMode} contactRef={contactRef} />
      </div>
      <DarkToggle darkMode={darkMode} handleDarkToggle={handleDarkToggle}/>  */}
    </>
  );
};
