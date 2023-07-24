import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Burger from './Burger';
import NavbarMobile from './NavbarMobile';
interface Navbar {
    darkMode: boolean;
    isFirstBoot: boolean;
    isMobile: boolean;
    homeIsOnScreen: boolean;
    handleScroll: (target: React.MutableRefObject<HTMLDivElement | null>) => void;
    homeRef: React.MutableRefObject<HTMLDivElement | null>; 
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
    isOpen: boolean;
    handleOpen: ()=>void;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Navbar(props:Navbar) {
    const {darkMode, isFirstBoot, isMobile, homeIsOnScreen, handleScroll, homeRef, aboutRef, projectRef, contactRef, isOpen, handleOpen, handleDarkToggle} = props;
    const navbarVariants = {
        hidden: isFirstBoot ? { opacity: 0, } : {opacity: 0.42 },
        visible: {
            opacity: 0.84,
            transition: {
                delay: isFirstBoot ? 5 : 0,
                duration: 1,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    const liVariants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: isFirstBoot ? 5 : 0,
                duration: 1,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            x: 50,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    const homeLI = () => {
        const homeRefVariant = {
          hidden: { x: 5, y: 5, opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: 1,
            }
          },
          hide: {
            opacity: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            }
          }
        }
    
        return (
            <motion.li 
              className="li-home" 
              key="nav-home"
              onClick={() => handleScroll(homeRef)}
              initial="hidden"
              animate="visible"
              exit="hide"
              variants={homeRefVariant}>
                <a className="nav-item">Lawrence Han</a>
            </motion.li>  
        )
    }

    return (
            <motion.ul className={`navbar ${darkMode && "dark"}`}
            initial="hidden"
            animate="visible"
            exit="hide"
            variants={navbarVariants}
            >
                <AnimatePresence>
                    {/* Home Button */}
                    {!homeIsOnScreen && !isMobile && homeLI()}        
                    {!isMobile && 
                        <motion.li onClick={() => handleScroll(aboutRef)} initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-about">
                            <a className="nav-item">about</a>
                        </motion.li>
                    }
                    {/* Standard Navbar LIs */}
                    {!isMobile && 
                        <motion.li onClick={() => handleScroll(projectRef)} initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-projects">
                            <a className="nav-item">experience / projects</a>
                        </motion.li>
                    }
                    {!isMobile &&
                        <motion.li onClick={() => handleScroll(contactRef)} initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-contact">
                            <a className="nav-item">contact</a>
                        </motion.li>
                    }
                    {/* Burger SVG for Mobile */}
                    {isMobile &&           
                        <Burger 
                            darkMode={darkMode}
                            isFirstBoot={isFirstBoot} 
                            isOpen={isOpen}
                            handleOpen={handleOpen}
                            homeIsOnScreen={homeIsOnScreen} 
                            handleScroll={handleScroll} 
                            homeRef={homeRef}
                            aboutRef={aboutRef}
                            projectRef={projectRef}
                            contactRef={contactRef}/>}
                    {isMobile && isOpen &&
                        <NavbarMobile 
                            darkMode={darkMode}
                            handleOpen={handleOpen}
                            handleScroll={handleScroll} 
                            homeRef={homeRef}
                            aboutRef={aboutRef}
                            projectRef={projectRef}
                            contactRef={contactRef}
                            handleDarkToggle={handleDarkToggle}/>
                    }
                </AnimatePresence>  
            </motion.ul>
    )
}