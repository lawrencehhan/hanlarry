import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TitleBlob from './TitleBlob';
import DetailBlob from './DetailBlob';
import TechIcons from './TechIcons';
import techData from '../../assets/techs/techData';
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
                    I’m an engineer based in San Francisco, CA - specializing in data anlaysis and regenerative-biomaterial therapeutics. I graduated from the University of Virginia with a BS In biomedical-engineering, and a minor in computer science. 
                </p>
                <p>
                    <br></br>somethingsomething on learning to code because of lab web/photography, then because of realizing how i could speed up data insights by using code at tempo, 
                </p>
                <p>
                    <br></br>somesomething about while having experience in the lab, passion in building software projects that complenemtn and boost research. 
                </p>
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