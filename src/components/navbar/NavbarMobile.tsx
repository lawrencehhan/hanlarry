import React from 'react';
import { motion, useAnimation } from 'framer-motion';
interface NavbarMobile {
    darkMode: boolean;
    handleOpen: ()=>void;
    handleScroll: (target: React.MutableRefObject<HTMLDivElement | null>) => void;
    homeRef: React.MutableRefObject<HTMLDivElement | null>; 
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Navbar(props:NavbarMobile) {
    const {darkMode, handleOpen, handleScroll, homeRef, aboutRef, projectRef, contactRef} = props;
    const navbarVariants = {
        hidden: {opacity: 0, y: -20, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            y: -200,
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        }
    }

    return (
            <motion.ul className={`navbar-mobile ${darkMode && "dark"}`}
            initial="hidden"
            animate="visible"
            exit="hide"
            variants={navbarVariants}
            key="something"
            >  
                {/* Background Gradient */}
                <motion.svg className="background-svg">
                    <motion.circle
                        className="background-circle"
                        cx="160"
                        cy="120"
                        r="40"
                        fill="#6CC0F2"
                        filter={darkMode ? "blur(70px)" : "blur(40px)"}
                        >    
                    </motion.circle>
                </motion.svg>
                {/* Navbar Items */}
                <motion.li onClick={() => {
                    handleScroll(homeRef)
                    handleOpen()
                    }} key="nav-home">
                    <motion.a className="nav-item-mobile">home</motion.a>
                </motion.li>
                <motion.li onClick={() => {
                    handleScroll(aboutRef)
                    handleOpen()
                    }} key="nav-about">
                    <motion.a className="nav-item-mobile">about</motion.a>
                </motion.li>
                <motion.li onClick={() => {
                    handleScroll(projectRef)
                    handleOpen()
                    }} key="nav-projects">
                    <motion.a className="nav-item-mobile">experience / projects</motion.a>
                </motion.li>
                <motion.li onClick={() => {
                    handleScroll(contactRef)
                    handleOpen()
                    }} key="nav-contact">
                    <motion.a className="nav-item-mobile">contact</motion.a>
                </motion.li>
                

            </motion.ul>
    )
}