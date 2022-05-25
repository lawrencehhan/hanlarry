import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Circle from '../../assets/Circle';
import ProfileImg from '../../assets/ProfileImg';
import Disk from '../../assets/Disk';
interface HomeProfile {
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
}

export default function HomeProfile(props:HomeProfile) { 
    const {darkMode, darkColor, lightColor} = props;
    const strokeColor = darkMode ? lightColor : darkColor;
    return(
        <motion.div className={`home-col home-profile ${darkMode && "dark"}`}>
            <Circle animated={true} xpos={-70} ypos={-50} darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
            <Circle animated={true} xpos={70} ypos={50} darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
            <ProfileImg />
            
            <Disk darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
        </motion.div>
    )
}