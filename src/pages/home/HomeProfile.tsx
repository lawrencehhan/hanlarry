import React from 'react';
import { motion } from 'framer-motion';
import Disk from '../../assets/Disk';
interface HomeProfile {
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
}

export default function HomeProfile(props:HomeProfile) { 
    const {darkMode, darkColor, lightColor} = props;

    return(
        <motion.div className={`home-col ${darkMode && "dark"}`}>
            <Disk darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
        </motion.div>
    )
}