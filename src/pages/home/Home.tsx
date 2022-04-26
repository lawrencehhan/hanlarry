import React from "react";
import { motion } from "framer-motion"
import './home.css';
import Glasses from '../../assets/Glasses';

interface HomeProp {
    darkMode: boolean;
}

export default function Home(props:HomeProp) {
    const {darkMode} = props;

    return (
        <div className="home-container">
            <motion.div className="glasses-container">
                <Glasses animated={false} darkMode={props.darkMode}/>
            </motion.div>
            {/* <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="218"
                height="120"
                fill="none"
                viewBox="0 0 218 120"
            >
                <mask id="path-1-inside-1_2_4" fill={darkMode ? "#2A2B2A" : "#FCF7FF"}>
                    <path
                    fillRule="evenodd"
                    d="M217.979 74.71v.387h-.004C217.475 99.931 168.872 120 108.99 120 49.107 120 .504 99.932.004 75.097H0V44.903h26.928c19.978-9.49 49.335-15.484 82.062-15.484 32.726 0 62.083 5.994 82.061 15.484h26.928V74.71z"
                    clipRule="evenodd"
                    ></path>
                </mask>
                <path
                    fill={darkMode ? "#FCF7FF" : "#2A2B2A"}
                    fillRule="evenodd"
                    d="M217.979 74.71v.387h-.004C217.475 99.931 168.872 120 108.99 120 49.107 120 .504 99.932.004 75.097H0V44.903h26.928c19.978-9.49 49.335-15.484 82.062-15.484 32.726 0 62.083 5.994 82.061 15.484h26.928V74.71z"
                    clipRule="evenodd"
                ></path>
                <path
                    fill={darkMode ? "#2A2B2A" : "#FCF7FF"}
                    d="M217.979 75.097v1.415h1.415v-1.415h-1.415zm-.004 0V73.68h-1.387l-.028 1.387 1.415.029zm-217.971 0l1.415-.029-.028-1.387H.004v1.416zm-.004 0h-1.415v1.415H0v-1.415zm0-30.194v-1.415h-1.415v1.415H0zm26.928 0v1.415h.32l.287-.137-.607-1.278zm164.123 0l-.607 1.278.288.137h.319v-1.415zm26.928 0h1.415v-1.415h-1.415v1.415zm-1.415 29.807v.387h2.83v-.387h-2.83zm1.415-1.029h-.004v2.83h.004v-2.83zm-1.419 1.387c-.115 5.72-2.998 11.298-8.387 16.504-5.393 5.21-13.214 9.962-22.962 13.981-19.489 8.035-46.419 13.032-76.221 13.032v2.83c30.08 0 57.393-5.038 77.3-13.245 9.951-4.103 18.117-9.024 23.85-14.562 5.735-5.541 9.115-11.786 9.25-18.483l-2.83-.057zm-107.57 43.517c-29.802 0-56.732-4.997-76.222-13.032-9.748-4.019-17.57-8.771-22.962-13.98-5.39-5.207-8.272-10.785-8.387-16.505l-2.83.057c.135 6.697 3.515 12.942 9.25 18.483 5.733 5.538 13.9 10.459 23.85 14.562 19.907 8.207 47.22 13.245 77.301 13.245v-2.83zM.004 73.681H0v2.83h.004v-2.83zm1.411 1.416v-.387h-2.83v.387h2.83zm0-.387V44.903h-2.83V74.71h2.83zM0 46.318h26.928v-2.83H0v2.83zm27.535-.137c19.738-9.375 48.874-15.347 81.455-15.347v-2.83c-32.872 0-62.45 6.016-82.669 15.62l1.214 2.557zm81.455-15.347c32.58 0 61.716 5.972 81.454 15.347l1.214-2.556c-20.219-9.605-49.797-15.62-82.668-15.62v2.83zm82.061 15.484h26.928v-2.83h-26.928v2.83zm25.513-1.415V74.71h2.83V44.903h-2.83z"
                    mask="url(#path-1-inside-1_2_4)"
                ></path>
                <path
                    fill={darkMode ? "#FCF7FF" : "#2A2B2A"}
                    stroke={darkMode ? "#2A2B2A" : "#FCF7FF"}
                    strokeWidth="1.415"
                    d="M217.272 45.29c0 6.007-2.926 11.793-8.354 17.125-5.429 5.334-13.322 10.17-23.133 14.247-19.618 8.152-46.769 13.211-76.795 13.211-30.027 0-57.178-5.059-76.796-13.21-9.81-4.078-17.704-8.914-23.133-14.248C3.634 57.083.708 51.297.708 45.29c0-6.006 2.926-11.792 8.353-17.124 5.43-5.334 13.322-10.17 23.133-14.247C51.812 5.766 78.963.708 108.99.708c30.026 0 57.177 5.058 76.795 13.21 9.811 4.077 17.704 8.914 23.133 14.248 5.428 5.332 8.354 11.118 8.354 17.124z"
                ></path>
            </motion.svg>     */}
        </div> 
    )
};