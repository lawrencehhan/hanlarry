import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Vector {
    darkMode: boolean;
}

// ID:5 - Instron Mechanics
export default function VectorMech(props:Vector) {
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
                duration: 4,
                ease: "easeInOut",
                staggerChildren: 0.5
            }
        }
    }
    const partyVal = 5
    const partxVal = 2
    const particleVariants = {
        hidden: { y: partyVal, x: partxVal, opacity: 0.3 },
        visible: {
            opacity: [0.3, 0.9, 0.3],
            y: [partyVal, -partyVal, partyVal],
            x: [partxVal, -partxVal, partxVal],
            transition: {
                repeat: Infinity,
                ease: "easeInOut",
                duration: 3,
            }
        }
    }
    const mainPartVariants = {
        hidden: { x: 0, y: 0, opacity: 0 },
        visible: {
            opacity: 1,
            x: [0, 55, 65, 180, 295], // 295
            y: [0, -40, -200, -195, -265],//-265
            transition: {
                delay: 2.5,
                duration: 5,
                ease: "easeInOut"
            }
        }
    }
    const plotVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: { 
                duration: 6,
                ease: [0.6, 0.01, -0.05, 0.95]
            }
        }
    }
    const labelVariants = {
        hidden: {opacity: 0}, 
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 2,
                ease: "easeInOut"
            }
        }
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
                {/* Particles */}
                <motion.circle
                    cx="91.5"
                    cy="352.5"
                    r="22.5"
                    fill={darkMode ? "#6CC0F2" : "#4390F9"}
                    fillOpacity="0.5"
                    variants={mainPartVariants}
                ></motion.circle>
                <motion.circle
                    cx="43.5"
                    cy="330.5"
                    r="22.5"
                    fill={darkMode ? "#6CC0F2" : "#4390F9"}
                    fillOpacity="0.5"
                    variants={particleVariants}
                ></motion.circle>
                <motion.circle
                    cx="117.5"
                    cy="397.5"
                    r="22.5"
                    fill={darkMode ? "#6CC0F2" : "#4390F9"}
                    fillOpacity="0.5"
                    variants={particleVariants}
                ></motion.circle>
                <motion.circle
                    cx="88.5"
                    cy="283.5"
                    r="22.5"
                    fill={darkMode? "#FFEDCB" : "#FFDC83"}
                    fillOpacity="0.5"
                    variants={particleVariants}
                ></motion.circle>
                <motion.circle
                    cx="49.5"
                    cy="406.5"
                    r="22.5"
                    fill={darkMode? "#FFEDCB" : "#FFDC83"}
                    fillOpacity="0.5"
                    variants={particleVariants}
                ></motion.circle>
                {/* Plotted Line */}
                <motion.path
                    stroke={darkMode ? "#6CC0F2" : "#4390F9"}

                    strokeWidth="4"
                    d="M107.528 344.387L166 183c6.455-16.682 21.634-34.611 41-41 21.22-7.001 140.5-29.5 147.5-35.5"
                    variants={plotVariants}
                ></motion.path>
                {/* Axis Labels */}
                <motion.path
                    stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M378.5 346.527L105.823 346.527"
                    variants={labelVariants}
                ></motion.path>
                <motion.path
                    stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M105.822 72.773L105.822 345.451"
                    variants={labelVariants}
                ></motion.path>
                <motion.path
                    fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    d="M93.736 219.669c-.768 0-1.445-.16-2.032-.48a3.373 3.373 0 01-1.344-1.44c-.32-.64-.48-1.418-.48-2.336 0-1.077.187-1.941.56-2.592a3.298 3.298 0 011.584-1.44c.683-.298 1.488-.448 2.416-.448h3.872v1.088H96.36c.277.256.507.55.688.88.192.331.336.704.432 1.12.107.416.16.88.16 1.392 0 .576-.085 1.126-.256 1.648-.16.512-.405.966-.736 1.36-.32.384-.725.688-1.216.912-.49.224-1.056.336-1.696.336zm.032-1.168c.576 0 1.045-.138 1.408-.416a2.41 2.41 0 00.8-1.104 4.46 4.46 0 00.256-1.536c0-.458-.048-.89-.144-1.296A4.49 4.49 0 0095 212.021h-.56c-.693 0-1.275.118-1.744.352-.47.224-.821.587-1.056 1.088-.224.491-.336 1.142-.336 1.952 0 .598.085 1.131.256 1.6.17.47.437.838.8 1.104.363.256.832.384 1.408.384z"
                    variants={labelVariants}
                ></motion.path>
                <motion.path
                    fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    d="M243.885 362.187c-1.237 0-2.144-.234-2.72-.704-.565-.48-.848-1.077-.848-1.792 0-.426.08-.773.24-1.04.171-.277.39-.496.656-.656.278-.17.582-.304.912-.4v-.08c-.458-.149-.826-.378-1.104-.688-.277-.32-.416-.736-.416-1.248 0-.49.123-.901.368-1.232.256-.341.619-.602 1.088-.784.48-.181 1.051-.272 1.712-.272.598 0 1.136.064 1.616.192.491.118.891.262 1.2.432l-.448 1.168a4.794 4.794 0 00-1.104-.448 4.32 4.32 0 00-1.264-.176c-.64 0-1.098.112-1.376.336-.266.214-.4.507-.4.88 0 .491.192.838.576 1.04.395.192.848.288 1.36.288h1.104v1.088h-1.104c-.469 0-.864.059-1.184.176-.32.118-.565.288-.736.512-.16.224-.24.502-.24.832 0 .459.182.806.544 1.04.374.224.896.336 1.568.336.555 0 1.035-.042 1.44-.128.416-.085.79-.213 1.12-.384v1.248a3.63 3.63 0 01-1.152.352 8.328 8.328 0 01-1.408.112z"
                    variants={labelVariants}
                ></motion.path>
            </motion.svg>
        </div>
    )
}