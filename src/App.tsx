import React, {useState, useEffect, useCallback} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Intro from './pages/intro/Intro'
import Home from './pages/home/Home'
import DarkToggle from './components/darkToggle/DarkToggle';

export default function App() {
  // Handling en tering the home page from the intro section
  const [enter, setEnter] = useState<boolean>(false);
  const handleEnter = useCallback(() => {
    // console.log(event.target.)
    setEnter(prevEnter => {
      return prevEnter ? prevEnter : !prevEnter
    })
  }, []);
  useEffect(() => {
    let appBody = document.getElementsByClassName("app")[0]
    appBody.addEventListener("click", handleEnter)
    if (enter) {
      console.log('Cleaning eventListener for entrance...')
      appBody.removeEventListener("click", handleEnter)
    }
  }, [enter])


  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode)
  const handleDarkToggle = (event:React.ChangeEvent) => {
    setDarkMode( prevDarkMode => !prevDarkMode )
    event.stopPropagation()
  }


  return (
    <>
      <div className={`app ${darkMode ? "dark" : "" }`}>
        <AnimatePresence>
          <Intro glassesDark={darkMode} entered={enter}/>
        </AnimatePresence>
        { enter && <Home darkMode={darkMode} />}
      </div>
      <DarkToggle darkMode={darkMode} handleDarkToggle={handleDarkToggle}/> 
    </>
  );
};
