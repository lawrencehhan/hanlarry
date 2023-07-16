import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TitleBlob from './TitleBlob';
import DetailBlob from './DetailBlob';
import TechIcons from './TechIcons';
import techData from '../../assets/techs/techData';
import Bubble from '../../assets/Bubble';
import './about.css';

interface About {
    darkMode: boolean;
    aboutRef?: React.MutableRefObject<HTMLDivElement | null>;
}

// Left Column About-Blurb
const AboutBlurb = (props:About) => {
    const { darkMode } = props;
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const blurbTitle = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }   
        }
    }
    const blurbText = {
        hidden: { opacity: 0, y: -110 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 3,
                ease: "easeOut"
            }   
        }
    }
    const blurbBubbles = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { 
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className='about-blurb about-col'>
            <motion.div className={`blurb-title ${darkMode && "dark"}`}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={blurbTitle}>
                about me
            </motion.div>
            <motion.div className={`blurb-text ${darkMode && "dark"}`}
            initial="hidden"
            animate={controls}
            variants={blurbText}>
                <p>
                    I’m an engineer based in San Francisco, CA - specializing in data anlaysis and regenerative-biomaterial therapeutics. I graduated from the University of Virginia with a BS in Biomedical-Engineering, and a minor in Computer Science. 
                </p>
                <p>
                    <br></br>My journey into programming began during my time in academia when I needed to create a website for my lab and develop a web portfolio for my photography passion. These experiences sparked my interest in coding and its potential applications. 
                </p>
                <p>
                    <br></br>As I progressed in my career, I joined Tempo Therapeutics, where I realized how coding could significantly enhance data analysis and accelerate insights. Witnessing the power of code in speeding up research processes, I became driven to explore software projects that complement and boost scientific endeavors.
                </p>
                <p>
                    <br></br>With a solid foundation in the lab and a growing expertise in coding, I strive to bridge the worlds of science and technology. Join me as I combine my knowledge and passion to create innovative solutions that drive research forward.
                </p>
            </motion.div>
            <motion.div className={`blurb-bubbleWrap ${darkMode && "dark"}`}
            initial="hidden"
            animate={controls}
            variants={blurbBubbles}>
                <Bubble 
                    animated={true}
                    xMovement={[-70, -70*1.2, -70, -70*0.08, -70]}
                    yMovement={[-50, -50*-1, -50, -50*-1, -50]}
                    darkMode={darkMode} 
                    darkColor={"#4390F9"} 
                    lightColor={"#4390F9"} 
                />
                <Bubble 
                    animated={true}
                    xMovement={[-10, -10*1.2, -10, -10*0.8, -10]}
                    yMovement={[50, 80*-1, 50, 80*-1, 50]}
                    darkMode={darkMode} 
                    darkColor={"#5CEC7E"} 
                    lightColor={"#5CEC7E"} 
                />
                <Bubble 
                    animated={true}
                    xMovement={[120, 120*0.8, 120, 120*1.2, 120]}
                    yMovement={[50, 50*-1, 50, 50*-1, 50]}
                    darkMode={darkMode} 
                    darkColor={"#EB9367"} 
                    lightColor={"#EB9367"} 
                />
            </motion.div>
        </div>
    )
}

// Right Column About-Tech summary
const AboutDetail = (props:About) => {
    const { darkMode } = props;
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 2,
                ease: 'easeInOut'
            }
        }
    }
    const iconVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2,
                duration: 2,
                ease: 'easeOut'
            }
        }
    }
    
    const techs = techData.map(tech => {
        return (
            <TechIcons
                key={tech.id}
                name={tech.name}
                icon={tech.icon}
                iconDarkMode={tech.iconDarkMode}
                darkMode={darkMode}
            />
        )
    })

    return (
        <div className='about-detail about-col'>
            <motion.div className='detail-title'>
                <TitleBlob darkMode={darkMode} />
                <motion.p className={`title-text ${darkMode && "dark"}`}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={textVariants}>
                    technologies I've worked with
                </motion.p>
            </motion.div>
            <motion.div className='detail-techs'
                initial="hidden"
                animate={controls}
                variants={iconVariants}>
                {techs}
            </motion.div>
            <DetailBlob darkMode={darkMode} />
        </div>
    )
}

export default function About(props:About) {
    const {darkMode, aboutRef} = props;
    return (
        <div className={`about page ${darkMode && "dark"}`} ref={aboutRef}>
            <AboutBlurb darkMode={darkMode} />
            <AboutDetail darkMode={darkMode} />
        </div>
    )
}