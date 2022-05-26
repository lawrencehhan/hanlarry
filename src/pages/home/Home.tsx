import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import './home.css';
import Glasses from '../../assets/Glasses';
import HomeProfile from './HomeProfile';
import HomeText from './HomeText';
import BackgroundCanvas from '../../components/background/BackgroundCanvas';

interface Home {
    darkMode: boolean;
    homeRef: React.MutableRefObject<HTMLDivElement | null>;
    isMobile: boolean;
}

export default function Home(props:Home) {
    const {darkMode, homeRef, isMobile} = props;
    const [darkColor, lightColor] = ["#2A2B2A", "#FCF7FF"]

    return (
        <div className={`home-container page ${darkMode && "dark"}`} ref={homeRef}>
            <motion.div className="glasses-container">
                <Glasses animated={true} isMobile={isMobile} darkMode={props.darkMode}/>
            </motion.div>
            <HomeProfile darkMode={darkMode} darkColor={darkColor} lightColor={lightColor}/>
            <HomeText darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
            {/* <AnimatePresence>
                {!isMobile && <BackgroundCanvas darkMode={darkMode} />}
            </AnimatePresence> */}
        </div> 
    )
};