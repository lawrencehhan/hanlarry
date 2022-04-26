import React from 'react';
import { motion } from 'framer-motion';
import Disk from '../../assets/Disk';
interface HomeText {
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
}

export default function HomeText(props:HomeText) { 
    const {darkMode, darkColor, lightColor} = props;

    return(
        <motion.div className={`home-col ${darkMode && "dark"}`}>
            <Disk darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
        </motion.div>
    )
}