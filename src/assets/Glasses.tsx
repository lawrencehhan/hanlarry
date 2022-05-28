import React from "react";
import { motion } from "framer-motion";
interface Icon {
  animated: boolean;
  isMobile: boolean;
  darkMode: boolean;
}
export default function Glasses(props:Icon) {
  const {animated, isMobile, darkMode} = props;
  const strokeTransition = {
    duration: 3,
    // ease: [0.6, 0.01, -0.05, 0.95]
    ease: [0.55, 0, 1, 0.45]
  };
  const glassesVariant = {
    hidden: { x: "0vw", y: "0vh", scale: 1, opacity: 1, },
    visible: {
        x: ["0vw", "-21vw", "-21vw", "-21vw"],
        y: ["0vh", "-5.8vh", "-5.8vh", "-5.8vh"],
        scale: [1, 1, 0.35, 0.35],
        opacity: [1, 1, 1, 0],
        transition: {
            when: "afterChildren",
            ease: [0.76, 0, 0.24, 1],
            times: [0, 0.5, 0.75, 1],
            duration: 4,
            delay: 2,
        } 
    }
  }
  const glassesMVariant = {
    hidden: { x: "0vw", y: "0vh", scale: 1, opacity: 1, },
    visible: {
        x: ["0vw", "2vw", "2vw", "2vw"],
        y: ["0vh", "-22vh", "-22vh", "-22vh"],
        scale: [1, 1, 0.35, 0.35],
        opacity: [1, 1, 1, 0],
        transition: {
            when: "afterChildren",
            ease: [0.76, 0, 0.24, 1],
            times: [0, 0.5, 0.75, 1],
            duration: 4,
            delay: 2,
        } 
    }
  }

  console.log('isMobile: ' + isMobile)
  const animatedPath = <motion.path
      d="M1.18 44c-.5-3.167 0-9 2-7s38 48 41 49 5.17.805 8.5.5m0 0c1.695 7.626 7.647 18.882 17.5 20 2.049.232 23.251 3.691 32.5-3.5 9.252-7.193 15.21-20.547 16-24.5.5-2.5-.5-12-2.5-16m-63.5 24c-.68-5.299 1-14.5 11-22m-11 22c-1.08-5.395 2.572-16.55 11-22m52.5-2c-1.301-2.603-10.375-7.91-20-8m20 8c-2.5-4.5-15.778-8.614-20-8m20 8c7.825-3.952 12.559-5.051 21.5-5m-41.5-3c-7.004-.065-25.975 5.106-32.5 10m32.5-10c-6.617.963-13.656.336-32.5 10m74-7c2.177.938-6.993 20.061 13.5 27.5 21.629 7.85 40.036-8.316 42.5-16 2.5-6.667 6.5-21.4 4.5-25-2.5-4.5-7-13-18-12.5m-42.5 26s4-10 9.5-15.5 22-10 33-10.5m-42.5 26s4-10 9.47-15.47c8.03-8.03 31.449-10.53 33.03-10.53m0 0c11 0 16 7 18.443 14 2.369-.9 3.275-1.756 4.057-4 .782-2.244-28-40.5-28-40.5-1.214.007-1.5 1.478-1.5 3"
      stroke={darkMode ? "#FCF7FF" : "#2A2B2A"}
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={strokeTransition}
    />


  const normalPath = <path
    d="M1.18 44c-.5-3.167 0-9 2-7s38 48 41 49 5.17.805 8.5.5m0 0c1.695 7.626 7.647 18.882 17.5 20 2.049.232 23.251 3.691 32.5-3.5 9.252-7.193 15.21-20.547 16-24.5.5-2.5-.5-12-2.5-16m-63.5 24c-.68-5.299 1-14.5 11-22m-11 22c-1.08-5.395 2.572-16.55 11-22m52.5-2c-1.301-2.603-10.375-7.91-20-8m20 8c-2.5-4.5-15.778-8.614-20-8m20 8c7.825-3.952 12.559-5.051 21.5-5m-41.5-3c-7.004-.065-25.975 5.106-32.5 10m32.5-10c-6.617.963-13.656.336-32.5 10m74-7c2.177.938-6.993 20.061 13.5 27.5 21.629 7.85 40.036-8.316 42.5-16 2.5-6.667 6.5-21.4 4.5-25-2.5-4.5-7-13-18-12.5m-42.5 26s4-10 9.5-15.5 22-10 33-10.5m-42.5 26s4-10 9.47-15.47c8.03-8.03 31.449-10.53 33.03-10.53m0 0c11 0 16 7 18.443 14 2.369-.9 3.275-1.756 4.057-4 .782-2.244-28-40.5-28-40.5-1.214.007-1.5 1.478-1.5 3"  
    stroke={darkMode ? "#FCF7FF" : "#2A2B2A"}
    strokeLinecap="round"
    strokeWidth="1.25"
  ></path>

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="203"
      height="110"
      fill="none"
      viewBox="0 0 203 110"
      className = {`glasses-icon ${isMobile && 'mobile'}`}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: {duration: 1, ease: "easeInOut"}}}
      variants={isMobile ? glassesMVariant:glassesVariant}
    >
      {animated ? animatedPath : normalPath}
    </motion.svg>
  );
}
