import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Vector {
    darkMode: boolean;
}

// ID:9 - Media
export default function VectorMedia(props:Vector) {
    const { darkMode } = props; // #FCF7FF #2A2B2A

    const controls = useAnimation()
    const { ref, inView } = useInView()
    const [ alreadyViewed, setAlreadyViewed ] = useState<boolean>(false) // required to prevent jitters from framer-motion repeats as they restart
    
    useEffect(() => {
        if (!alreadyViewed && inView) {
            controls.start("visible")
            setAlreadyViewed(prevAlreadyViewed => !prevAlreadyViewed)
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 5,
                ease: "easeInOut",
            }
        }
    }
    const gradientVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 3,
                delay: 2,
                ease: "easeInOut"
            }
        }
    }
    const frameTransitions = {
        delay: 2,
        duration: 5,
        ease: "easeInOut"
    }
    const frameDotsVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 4,
                ease: "easeInOut"
            }
        }
    }
    const paletteVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 3,
                duration: 3,
                ease: "easeInOut"
            }
        }
    }
    const docVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                delay: 3,
                duration: 3,
                ease: "easeInOut"
            }
        }
    }
    const dotGroupVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 3.5,
                duration: 3,
                ease: "easeInOut"
            }
        }
    }
    const webDotTransitions = {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
    }





    return (
        <div className="card-image card-link">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="450"
                height="450"
                fill="none"
                viewBox="0 0 450 450"
                className="example"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                >
                <g clipPath="url(#clip0_208_34224)">
                    {/* Camera */}
                    <path
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M24.753 54.306v47.962h85.692V54.306H86.997l-8.314-8.313h-20.25l-8.313 8.313h-8.527v-5.33h-8.1v5.33h-8.74z"
                    ></path>
                    <circle
                        cx="67.619"
                        cy="78.179"
                        r="16.192"
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        strokeWidth="3"
                    ></circle>
                    <path
                        stroke={darkMode ? "#6CC0F2" : "#4390F9"}
                        strokeLinecap="round"
                        strokeWidth="3"
                        d="M56.96 77.752c.356-3.553 2.9-10.573 10.233-10.232"
                    ></path>
                    {/* Gradient Flash */}
                    <path
                        fill="url(#paint0_radial_208_34224)"
                        d="M25.873 179.85c2.24-33.604 10.16-82.057 47.934-97.318 18.483 10.642 66.848-1 105.854-14.002 20.163-6.72 66.649-6.72 93.533-2.8 17.362 0 80.031 22.758 117.055 57.127l-233.55 239.152S52.757 375.316 33.154 299.146c-5.928-14.137-9.52-85.692-7.28-119.296z"
                    ></path>
                    {/* Palette */}
                    <motion.circle
                        cx="311.511"
                        cy="142.325"
                        r="16.802"
                        fill="#002C4B"
                        fillOpacity="0.8"
                        variants={paletteVariants}
                    ></motion.circle>
                    <motion.circle
                        cx="356.317"
                        cy="142.325"
                        r="16.802"
                        fill="#FFEDCB"
                        fillOpacity="0.8"
                        variants={paletteVariants}
                    ></motion.circle>
                    <motion.circle
                        cx="401.123"
                        cy="142.325"
                        r="16.802"
                        fill="#007D52"
                        fillOpacity="0.8"
                        variants={paletteVariants}
                    ></motion.circle>
                    <motion.path
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        d="M284.007 109.221H428.626V175.43H284.007z"
                        initial={{
                            opacity: 0,
                            pathLength: 0,
                            x: 90,
                            y: -30,
                        }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            x: 0,
                            y: 0,
                        }}
                        transition={frameTransitions}
                    ></motion.path>
                    {/* Document Body */}
                    <motion.path
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        strokeLinejoin="round"
                        d="M67.626 269.553H176.626V425.553H67.626z"
                        initial={{
                            opacity: 0,
                            pathLength: 0,
                            x: -90,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            x: 0,
                            y: 0,
                        }}
                        transition={frameTransitions}
                    ></motion.path>
                    {/* Document Strokes */}
                    <motion.path
                        stroke="#002C4B"
                        strokeLinecap="round"
                        strokeOpacity="0.8"
                        strokeWidth="3"
                        d="M73.126 325.263c11.625-10.077 19.672-6.268 37.095 0 17.424 6.269 25.42 6.503 39.905 0"
                        variants={docVariants}
                    ></motion.path>
                    <motion.path
                        stroke="#FFEDCB"
                        strokeLinecap="round"
                        strokeOpacity="0.8"
                        strokeWidth="3"
                        d="M84.126 347.699c11.625-9.161 19.672-5.699 37.095 0 17.424 5.698 25.42 5.911 39.905 0"
                        variants={docVariants}
                    ></motion.path>
                    <motion.path
                        stroke="#007D52"
                        strokeLinecap="round"
                        strokeOpacity="0.8"
                        strokeWidth="3"
                        d="M95.126 370.263c11.625-10.077 19.672-6.268 37.095 0 17.424 6.269 25.42 6.503 39.905 0"
                        variants={docVariants}
                    ></motion.path>
                    <motion.path
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        strokeLinecap="round"
                        strokeOpacity="0.8"
                        strokeWidth="3"
                        d="M119.126 291.053h43m-86 112h43"
                        variants={docVariants}
                    ></motion.path>
                    {/* Moving Circles */}
                    <motion.g
                    variants={dotGroupVariants}
                    >
                        <motion.circle
                            cx="293.604"
                            cy="304.604"
                            r="32.104"
                            stroke="#002C4B"
                            strokeWidth="3"
                            initial={{
                                x: 0
                            }}
                            animate={{
                                x: [0, 80, 0]
                            }}
                            transition={webDotTransitions}
                        ></motion.circle>
                        <motion.circle
                            cx="372.604"
                            cy="304.604"
                            r="32.104"
                            stroke="#007D52"
                            strokeWidth="3"
                            initial={{
                                x: 0
                            }}
                            animate={{
                                x: [0, -80, 0]
                            }}
                            transition={webDotTransitions}
                        ></motion.circle>
                    </motion.g>
                    {/* Window Objs */}
                    <motion.circle
                        cx="247.601"
                        cy="236.601"
                        r="5.601"
                        fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        fillOpacity="0.8"
                        variants={frameDotsVariants}
                    ></motion.circle>
                    <motion.circle
                        cx="261.105"
                        cy="236.417"
                        r="5.601"
                        fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        fillOpacity="0.8"
                        variants={frameDotsVariants}
                    ></motion.circle>
                    <motion.circle
                        cx="274.547"
                        cy="236.417"
                        r="5.601"
                        fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        fillOpacity="0.8"
                        variants={frameDotsVariants}
                    ></motion.circle>
                    <motion.path
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        strokeLinejoin="round"
                        d="M237.5 225.5H429.5V247.5H237.5z"
                        initial={{
                            opacity: 0,
                            pathLength: 0,
                            x: 150,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            x: 0,
                            y: 0,
                        }}
                        transition={frameTransitions}
                    ></motion.path>
                    <motion.path 
                        stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                        d="M237.5 247.5H429.5V362.5H237.5z"
                        initial={{
                            opacity: 0,
                            pathLength: 0,
                            x: 150,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            x: 0,
                            y: 0,
                        }}
                        transition={frameTransitions}
                    ></motion.path>
                </g>
                <defs>
                    <radialGradient
                        id="paint0_radial_208_34224"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(116.00019 170.0002 -233.35935 159.23351 126 83.5)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#6CC0F2" stopOpacity="0.5"></stop>
                        <stop offset="1" stopColor="#6CC0F2" stopOpacity="0"></stop>
                    </radialGradient>
                    <clipPath id="clip0_208_34224">
                    <path fill="#fff" d="M0 0H450V450H0z"></path>
                    </clipPath>
                </defs>
            </motion.svg>
        </div>
    )
}