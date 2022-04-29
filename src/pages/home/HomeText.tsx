import React from 'react';
import { motion } from 'framer-motion';
import Disk from '../../assets/Disk';
interface HomeText {
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
}
interface AnimatedLetters {
    title: string;
    className: string;
    highlight?: boolean;
}

// Variants for framer-motion
const textBanner = {
    visible: { 
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};
const textLetter_01 = {
    hidden: { y: -300, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        } 
    }
};
const textLetter_02 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.5
        } 
    }
};
const textHighlight = {
    hidden: { y: 100, opacity: 0, rotate: 0},
    visible: {
        y: 0,
        opacity: 1,
        rotate: -3,
        transition: {
            ease: "easeOut",
            duration: 1,
            delay: 3
        } 
    }
};

// Component for animated letter banner
const AnimatedLetters = (props:AnimatedLetters) => {
    const {title, className, highlight} = props;
    const titleCheck = (className === "home-text-title")
    return (
        <motion.span
            className={`home-text ${className}`}
            >
            {[...title].map( (letter) => (
                <motion.span
                    className="letter"
                    variants={titleCheck ? textLetter_01: textLetter_02}>
                    {(letter === ' ') ? '\u00A0' : letter}
                    {(letter === "L" && highlight) && 
                        <motion.span
                            className="highlightBox"
                            variants={textHighlight}>
                        </motion.span>
                    }
                </motion.span>
            ))}
        </motion.span>
    )}

export default function HomeText(props:HomeText) { 
    const {darkMode, darkColor, lightColor} = props;

    return(
        <motion.div className={`home-col home-text-col ${darkMode && "dark"}`}
            variants={textBanner}
            initial='hidden'
            animate='visible'
        >
            <AnimatedLetters title={"HI, WELCOME"} className={"home-text-title"} />
            <AnimatedLetters title={"my name is Lawrence Han"} className={"home-text-intro"} highlight={true}/>
            <AnimatedLetters title={"I am an engineer . . . "} className={"home-text-passage"} />
        </motion.div>
    )
}