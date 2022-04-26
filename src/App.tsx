import React, {useState, useEffect, useCallback} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Intro from './pages/intro/Intro'
import Home from './pages/home/Home'
import DarkToggle from './components/darkToggle/DarkToggle';

export default function App() {

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode)
  const handleDarkToggle = (event:React.ChangeEvent) => {
    setDarkMode( prevDarkMode => !prevDarkMode )
    event.stopPropagation()
  }


  return (
    <>
      <div className={`app ${darkMode ? "dark" : "" }`}>
        <Home darkMode={darkMode} />
      </div>
      <DarkToggle darkMode={darkMode} handleDarkToggle={handleDarkToggle}/> 
    </>
  );
};
