import React from 'react';
import { motion } from 'framer-motion';
interface WaveLine {
    darkMode: boolean;
    mainWave: boolean;
    strokeColor: string;
    lineWidth: number;
}

export default function WaveLine(props:WaveLine) {
    const {darkMode, mainWave, strokeColor, lineWidth} = props;
    
    const mainPath = "M1 1001.5C48.5 1003.83 144.7 989.8 299.5 837C493 646 554 282 716.5 220.5C879 159 1046.98 497.139 1316 339C1603.5 170 1803 396 1922 1"
    const secondaryPath = "M0.5 800C88 659.5 294.2 715.9 391 703.5C512 688 363 488 494.5 255.5C626 23 2013.5 286.5 2121 1" 
    
    const waveLineTransition = {
        delay: 6,
        repeat: Infinity,
        repeatType: undefined,
        duration: 28,
        ease: "easeInOut",
    }
    const waveLineVariantMain = {
        hidden: {
            scale: 1.8,
            y: -460,
            x: 300,
        },
        visible: {
            scale: [1.8, 1.85, 1.8, 1.75, 1.8],
            x: [300, 360, 300, 254, 300],
            // rotate: [0, 6, 0, -6, 0],
            transition: waveLineTransition,
        }
    }
    const waveLineVariantSecondary = {
        hidden: {
            scale: 2,
            y: -540,
            x: 560,
        },
        visible: {
            scale: [2, 1.95, 2, 2.2, 2],
            // x: [300, 360, 300, 254, 300],
            transition: waveLineTransition,
        }
    }

    const strokeTransitionMain = {
        delay: 4,
        duration: 4,
        ease: [0.55, 0, 1, 0.45]
    }
    const strokeTransitionSecondary = {
        delay: 6,
        duration: 3,
        ease: [0.55, 0, 1, 0.45]
      };
    
    return (
            <motion.svg className={`svg-waveLine ${mainWave?"waveLine-main":"waveLine-secondary"}`} height="1923" width="1003"
                viewBox="0 0 1923 1004"
                initial="hidden"
                animate="visible"
                // Commented out as it was causing too much lag while testing
                // variants={mainWave ? waveLineVariantMain : waveLineVariantSecondary}
            >
                <motion.path 
                    d={mainWave ? mainPath : secondaryPath}        
                    strokeLinecap="round"
                    fill="none"
                    stroke-width={lineWidth}
                    stroke={strokeColor}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={mainWave ? strokeTransitionMain : strokeTransitionSecondary}
                />
            </motion.svg>
    )
}