import React from "react";
import { motion } from "framer-motion"
import './home.css';
import Glasses from '../../assets/Glasses';

interface GlassesProp {
    glassesDark: boolean;
}

export default function Home(props:GlassesProp) {
    return (
        <div className="glasses-container">
            <Glasses animated={false} darkMode={props.glassesDark}/>
        </div>
    )
};