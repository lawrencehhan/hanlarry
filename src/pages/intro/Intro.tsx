import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import './intro.css';
import Glasses from '../../assets/Glasses'


interface GlassesProp {
    glassesDark: boolean;
    entered?: boolean;
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
            <AnimatePresence>
                {/* conditionally render each of this after passign in state as prop */}
                {!props.entered && (
                    <motion.div className="intro-intro" 
                        key="introTitle"
                        initial="hiddenDown"
                        animate="visible"
                        exit= {{
                            opacity: 0,
                            y: -20,
                            transition: {
                                delay: 0,
                                duration: 0.5
                            }
                        }}
                        variants={variants}
                        transition={transition}
                    >
                            hi there! my name is Lawrence Han
                    </motion.div>
                )}
                <Glasses animated={true} darkMode={props.glassesDark}/>
                {!props.entered && (
                    <motion.div className="intro-prompt"
                        key="introPrompt"
                        initial="hiddenUp"
                        animate="visibleHalf"
                        exit= {{
                            opacity: 0,
                            y: 20,
                            transition: {
                                delay: 0,
                                duration: 0.5
                            }
                        }}
                        variants={variants}
                        transition={transition}                
                    >
                        click / tap anywhere
                    </motion.div>  
                )}
            </AnimatePresence>
        </div>
    )
}

