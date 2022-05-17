import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectData from './projectCard/projectData';
import ProjectCard from './projectCard/ProjectCard';
import './projects.css';

interface Projects {
    darkMode: boolean;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Projects(props:Projects) {
    const {darkMode, projectRef} = props;
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const cards = projectData.map((proj, i) => {
        return (
            <ProjectCard 
                id={proj.id}
                title={proj.title}
                text={proj.text}
                techList={proj.techList}
                image={proj.image}
                blob={proj.blob}
                link={proj.link}
                darkMode={darkMode}
            />
        )
    })

    return (
        <div className={`projects page ${darkMode && "dark"}`} ref={projectRef}>
            <motion.div className='projects-main-title'>
                my{`\u00A0`}<span className={`title-highlight first ${darkMode && "dark"}`}>experience</span>{`\u00A0`}and{`\u00A0`}<span className={`title-highlight ${darkMode && "dark"}`}>projects</span>
            </motion.div>
            {cards}
        </div>
    )
}