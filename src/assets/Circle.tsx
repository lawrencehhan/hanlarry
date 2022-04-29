import React from 'react';
import { motion } from 'framer-motion';
interface Circle {
    animated: boolean;
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
    xpos: number;
    ypos: number;
}

export default function Circle(props:Circle) {
    const {darkMode, animated, darkColor, lightColor, xpos, ypos} = props;
    const strokeColor = darkMode ? lightColor : darkColor;
    const strokeTransition = {
        duration: 6,
        ease: [0.6, 0.01, -0.05, 0.95]
    };
    const circleVariant = {
        hidden: { x: xpos, y: ypos, },
        visible: {
            y: ypos*-1,
            x: xpos*-1,
        }
    }

    const circleTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
    }
    
    return (
        <motion.svg className="svg-circle" height="300" width="300"
            initial="hidden"
            animate="visible"
            variants={!animated ? undefined : circleVariant}
            // transition={circleTransition}
        >
            <motion.circle 
                cx="150" 
                cy="150" 
                r="150" 
                fill="none" 
                stroke={strokeColor} 
                stroke-width="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={!animated ? undefined : strokeTransition}
                >
            </motion.circle>
        </motion.svg>
    )
}