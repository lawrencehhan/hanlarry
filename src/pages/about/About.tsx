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
                    Hello there! I'm an engineer based in Northern Virginia - specializing in data analysis and regenerative-biomaterial therapeutics. I graduated from the University of Virginia with a BS in Biomedical-Engineering, and a minor in Computer Science. 
                </p>
                <p>
                    <br></br>While I was introduced to coding through my formal education, I 'really' began programming as my day-to-day routines started necessitating it. I found myself needing applicable programming skills to address various facets of my life. Whether it was creating a website for my research lab, crafting professional photography portfolios, or accelerating data analysis during lab hours, coding became an invaluable tool that brought my ideas to life.
                </p>
                <p>
                    <br></br>As I advanced in my career and joined Tempo Therapeutics, I experienced firsthand the tangible impact of code in real-world practice. No longer just an individual endeavor, programming became a collaborative effort that transformed the way our research team operated. As I explored new languages, models, and tools, my passion for coding grew in tandem with enhancing our data analysis capabilities, propelling our team's insights forward at an accelerated pace.
                </p>
                <p>
                    <br></br>Fast-forward to now, I stand at the exciting juncture of my passion for coding and the ever-changing landscape of tech!
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