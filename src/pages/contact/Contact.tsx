import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './contact.css';

interface Contact {
    darkMode: boolean;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Contact(props:Contact) {
    const { darkMode, contactRef } = props;
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 0.6,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className={`contact page ${darkMode && "dark"}`}
        ref={contactRef}
        >
            <motion.div className={"contact-title"}
                initial="hidden"
                animate={controls}
                variants={variants}>
                    Email: Lhh128@gmail.com
            </motion.div>
            <a href="https://github.com/lawrencehhan" className="icon-wrapper" target="_blank" ref={ref}>
                <motion.img 
                    src={require(`../../assets/contact/${darkMode ? "githubDM.png" : "github.png"}`)} 
                    className='contact-icon' 
                    alt="Github"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                />
            </a>
            <a href="https://www.linkedin.com/in/lawrence-han-332505206/" className="icon-wrapper" target="_blank">
                <motion.img 
                    src={require(`../../assets/contact/${darkMode ? "linkedinDM.png" : "linkedin.png"}`)} 
                    className='contact-icon' 
                    alt="LinkedIn"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                />
            </a>
            <a href="https://www.instagram.com/han.larry/" className="icon-wrapper" target="_blank">
                <motion.img 
                    src={require(`../../assets/contact/${darkMode ? "instagramDM.png" : "instagram.png"}`)} 
                    className='contact-icon' 
                    alt="Instagram"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                />
            </a>
        </div>
    )
}