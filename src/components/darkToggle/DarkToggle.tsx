import React from "react";
import { motion } from "framer-motion";
import './darkToggle.css';
interface DarkProp {
    darkMode: boolean;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function DarkToggle(props: DarkProp) {
    const {darkMode, handleDarkToggle} = props
    const toggleValue = darkMode ? "darkMode" : "lightMode";
    const variants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: 5,
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    console.log('DarkMode On: '+ darkMode)
    return (
        <motion.div 
            className="button-row"
            initial="hidden"
            animate="visible"
            variants={variants}>
                <input
                    className="toggle-button"
                    type="checkbox"
                    name="DarkToggle"
                    id={toggleValue}
                    value={toggleValue}
                    checked={darkMode}
                    onChange={handleDarkToggle} 
                />
                <label
                    className="toggle-label"
                    htmlFor={toggleValue}
                >
                    <span className="toggle-switch" />
                </label>
        </motion.div>
    )
}