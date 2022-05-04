import React from 'react';
import './about.css';

interface About {
    darkMode: boolean;
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function About(props:About) {
    const {darkMode, aboutRef} = props;
    return (
        <div className="about page" ref={aboutRef}>
            About Page
        </div>
    )
}