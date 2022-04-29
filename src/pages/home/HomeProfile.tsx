import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImg from '../../assets/profile_image_md.png';
import Circle from '../../assets/Circle';
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
            <Circle animated={false} xpos={-70} ypos={-140} darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
            <Circle animated={false} xpos={70} ypos={100} darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
            <motion.img
                className="profile-img"
                src={ProfileImg}
            >
                
            </motion.img>
            
            <Disk darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
        </motion.div>
    )
}