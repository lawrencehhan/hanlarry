import React from "react";
import { motion } from "framer-motion";
import './darkToggle.css';
interface DarkProp {
    darkMode: boolean;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
    isMobile?: boolean;
}

export default function DarkToggle(props: DarkProp) {
    const {darkMode, handleDarkToggle, isMobile} = props
    const toggleValue = darkMode ? "darkMode" : "lightMode";
    const variants = {
        hidden: !isMobile ? { opacity: 0, } : { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 3,
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

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
                <img 
                    src={require(`../../assets/${darkMode?"dm_moon.png":"dm_sun.png"}`)}
                    className="dm-image"
                    alt="Darkmode Type"
                />
        </motion.div>
    )
}