import React from 'react';
import './projects.css';

interface Projects {
    darkMode: boolean;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Projects(props:Projects) {
    const {darkMode, projectRef} = props;
    return (
        <div className={`projects page ${darkMode && "dark"}`} ref={projectRef}>
            Projects Page
        </div>
    )
}