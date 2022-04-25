import React, {useState, useEffect, useCallback} from 'react';
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

  const [darkMode, setDarkMode] = useState<boolean>(false)
  const handleDarkToggle = (event:React.ChangeEvent) => {
    setDarkMode( prevDarkMode => !prevDarkMode )
    console.log('in THE TOGGLE BUTTON')
    event.stopPropagation()
  }

  return (
    <>
      <div className={`app ${darkMode ? "dark" : "" }`}>
        { enter ? <Home glassesDark={darkMode}/> : <Intro glassesDark={darkMode}/> }
      </div>
      <DarkToggle darkMode={darkMode} handleDarkToggle={handleDarkToggle}/> 
    </>
  );
};
