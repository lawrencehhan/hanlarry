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
            // delayChildren: 7.2,
            delayChildren: 5,
            staggerChildren: 0.05
        }
    }
};
const textLetter_01 = {
    hidden: { y: -200, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.33, 1, 0.68, 1],
            duration: 1
        } 
    }
};
const textLetter_02 = {
    hidden: { opacity: 0, x: 10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 0.25
        } 
    }
};
const textHighlight = {
    hidden: { y: 50, opacity: 0, rotate: 0},
    visible: {
        y: 0,
        opacity: 1,
        rotate: -3,
        transition: {
            ease: "easeOut",
            duration: 1.5,
            delay: 9,
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
            {[...title].map( (letter, i) => (
                <motion.span
                    key={i}
                    className="letter"
                    variants={titleCheck ? textLetter_01: textLetter_02}>
                    {(letter === ' ') ? '\u00A0' : letter}
                    {(letter === "L" && highlight) && 
                        <motion.span
                            className="highlightBox"
                            variants={textHighlight}>
                                &nbsp;
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
            <AnimatedLetters title={"Hi, Welcome"} className={"home-text-title"} />
            <AnimatedLetters title={"my name is Lawrence Han"} className={"home-text-intro"} highlight={true}/>
            <AnimatedLetters title={"an engineer based in the greater metropolitan DC area"} className={"home-text-passage"} />
        </motion.div>
    )
}