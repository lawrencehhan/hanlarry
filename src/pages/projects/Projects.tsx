import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectData from './projectCard/projectData';
import ProjectCard from './projectCard/ProjectCard';
// Custom Vector Imports
import ImgSynestify from './projectCard/projectImages/ImgSynestify';
import VectorGPC from './projectCard/projectImages/VectorGpc';
import VectorMech from './projectCard/projectImages/VectorMech';
import ImgScraper from './projectCard/projectImages/ImgScraper';
import VectorMedia from './projectCard/projectImages/VectorMedia';
import './projects.css';

interface Projects {
    darkMode: boolean;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Projects(props:Projects) {
    const {darkMode, projectRef} = props;

    // Cards containing text only for each project
    const cards = ProjectData().map((proj) => {
        return (
            // Previous Version included images with mapping,
            // However, having useInView ref vals within the mapping
            // caused infinite renderings - will return for updates
            <ProjectCard 
                key={proj.id}
                id={proj.id}
                title={proj.title}
                text={proj.text}
                techList={proj.techList}
                // blob={proj.blob}
                // isVector={proj.isVector}
                // image={proj.image}
                link={proj.link}
                darkMode={darkMode}
            />
        )
    })

    return ( 
        <div className={`projects page ${darkMode && "dark"}`} ref={projectRef}>
            <motion.div className={`projects-main-title ${darkMode && "dark"}`}>
                my{`\u00A0`}<span className={`title-highlight first ${darkMode && "dark"}`}>experience</span>{`\u00A0`}and{`\u00A0`}<span className={`title-highlight ${darkMode && "dark"}`}>projects</span>
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                    />
                    <ImgSynestify darkMode={darkMode} />
                </div>
                {cards[0]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                    />
                    <VectorGPC darkMode={darkMode} />
                </div>
                {cards[1]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                    />
                    <VectorMech darkMode={darkMode} />
                </div>
                {cards[2]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                    />
                    <ImgScraper darkMode={darkMode} />
                </div>
                {cards[3]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                    />
                    <VectorMedia darkMode={darkMode} />
                </div>
                {cards[4]}
            </motion.div>
        </div>
    )
}