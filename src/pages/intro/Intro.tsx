import React from "react";
import { motion } from 'framer-motion';
import './intro.css';
import Glasses from '../../assets/Glasses'


interface GlassesProp {
    glassesDark: boolean;
}

export default function Intro(props:GlassesProp) {
    const variants = {
        visible: { opacity: 1, y: 0 },
        visibleHalf: { opacity: 0.5, y: 0 },
        hiddenDown: { opacity: 0, y: -20 },
        hiddenUp: { opacity: 0, y: 20 },
    }
    const transition = {
        duration: 1,
        delay: 2,
        ease: "easeOut"
    }
    return (
        <div className="intro-container">
            <motion.div className="intro-intro" 
                initial="hiddenDown"
                animate="visible"
                variants={variants}
                transition={transition}
            >
                    hi there! my name is Lawrence Han
            </motion.div>
            <Glasses animated={true} darkMode={props.glassesDark}/>
            <motion.div className="intro-prompt"
                initial="hiddenUp"
                animate="visibleHalf"
                variants={variants}
                transition={transition}                
            >
                click / tap anywhere
            </motion.div>
        </div>
    )
}

