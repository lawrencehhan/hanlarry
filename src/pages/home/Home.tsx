import React from "react";
import { motion } from "framer-motion"
import './home.css';
import Glasses from '../../assets/Glasses';
import HomeProfile from './HomeProfile';
import HomeText from './HomeText';

interface Home {
    darkMode: boolean;
}

export default function Home(props:Home) {
    const {darkMode} = props;
    const [darkColor, lightColor] = ["#2A2B2A", "#FCF7FF"]


    return (
        <div className={`home-container ${darkMode && "dark"}`}>
            <motion.div className="glasses-container">
                <Glasses animated={true} darkMode={props.darkMode}/>
            </motion.div>
            <HomeProfile darkMode={darkMode} darkColor={darkColor} lightColor={lightColor}/>
            <HomeText darkMode={darkMode} darkColor={darkColor} lightColor={lightColor} />
        </div> 
    )
};