import React from 'react';
import { motion } from 'framer-motion';
interface Bubble {
    animated: boolean;
    darkMode: boolean;
    darkColor: string;
    lightColor: string;
    xMovement: number[];
    yMovement: number[];
}

export default function Bubble(props:Bubble) {
    const {darkMode, animated, darkColor, lightColor, xMovement, yMovement} = props;
    const fillColor = darkMode ? lightColor : darkColor;
    
    const bubbleTransition = {
        delay: 4,
        repeat: Infinity,
        repeatType: undefined,
        duration: 12,
        ease: "easeInOut",
    }
    const bubbleVariant = {
        hidden: { x: xMovement[0], y: yMovement[0], },
        visible: {
            x: xMovement,
            y: yMovement,
            transition: bubbleTransition,
        }
    }
    
    return (
        <motion.svg className="svg-bubble" height="300" width="300"
            viewBox="0 0 300 300"
            initial="hidden"
            animate="visible"
            variants={!animated ? undefined : bubbleVariant}
        >
            <motion.circle
                cx="150" 
                cy="150" 
                r="150" 
                fill={fillColor} 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                >
            </motion.circle>
        </motion.svg>
    )
}