import React from 'react';
import { motion } from 'framer-motion';
interface Navbar {
    darkMode: boolean;
    isScrolled?: boolean;
}

export default function Navbar(props:Navbar) {
    const {darkMode} = props;
    
    const handleClick = () => {
        return
    }

    return (
        <ul className={`navbar ${darkMode && "dark"}`}>
            <li>
                <a className="nav-item" onClick={handleClick}>about</a>
            </li>
            <li>
                <a className="nav-item" onClick={handleClick}>experience / projects</a>
            </li>
            <li>
                <a className="nav-item" onClick={handleClick}>contact</a>
            </li>
        </ul>
    )
}