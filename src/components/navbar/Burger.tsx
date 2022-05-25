import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface NavbarBurger {
    darkMode: boolean;
    isFirstBoot: boolean;
    isOpen: boolean;
    handleOpen: ()=>void;
    homeIsOnScreen: boolean;
    handleScroll: (target: React.MutableRefObject<HTMLDivElement | null>) => void;
    homeRef: React.MutableRefObject<HTMLDivElement | null>; 
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Burger(props:NavbarBurger) {
    const {darkMode, isFirstBoot, isOpen, handleOpen, homeIsOnScreen, handleScroll, homeRef, aboutRef, projectRef, contactRef} = props;
    const svgVariants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: isFirstBoot ? 5 : 0,
                duration: 1,
                ease: "easeInOut"
            }
        },
        // hide: {
        //     opacity: 0,
        //     transition: {
        //         duration: 1,
        //         ease: "easeInOut"
        //     }
        // }
    }

    // Motion Components
    const variants = isOpen ? "openBurger" : "closedBurger"
    const burgerTop = {
        closedBurger: {
            rotate: 0,
            y: 0,
        },
        openBurger: {
            rotate: 45,
            y: 1
        }
    }
    const burgerCenter = {
        closedBurger: {
            opacity: 1,
        },
        openBurger: {
            opacity: 0,
        }
    }
    const burgerBottom = {
        closedBurger: {
            rotate: 0,
            y: 0,
        },
        openBurger: {
            rotate: -45,
            y: -1
        }
    }
    const transition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
    }
    // Burger Line Props
    const burgerProps = {
        stroke: darkMode ? "#FCF7FF" : "#2A2B2A",
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variants,
        transition,
    }
    const width = 24
    const height = 64
    const unitHeight = 6
    const unitWidth = (unitHeight * (width as number)) / (height as number);

    return (
        <motion.svg
            onClick={() => handleOpen()}
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            variants={svgVariants} 
            className="burger-svg"
            initial="hidden"
            animate="visible"
            // exit="hide"
            key="li-svg">
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="2"
                    y2="2"
                    variants={burgerTop}
                    {...burgerProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="3"
                    y2="3"
                    variants={burgerCenter}
                    {...burgerProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="4"
                    y2="4"
                    variants={burgerBottom}
                    {...burgerProps}
                />
        </motion.svg>
    )
}