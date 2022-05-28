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

    // Hook wrapping inView animation so we can access multiple refs
    const useAnimationOnView = () => {
        const controls = useAnimation()
        const { ref, inView } = useInView()
        useEffect(() => {
            if (inView) {
                controls.start("visible")
            }
        }, [controls, inView])

        return { ref, controls }
    }

    const { ref: blobRefOne, controls: controlsOne } = useAnimationOnView()
    const { ref: blobRefTwo, controls: controlsTwo } = useAnimationOnView()
    const { ref: blobRefThree, controls: controlsThree } = useAnimationOnView()
    const { ref: blobRefFour, controls: controlsFour } = useAnimationOnView()
    const { ref: blobRefFive, controls: controlsFive } = useAnimationOnView()
    const blobVariants = {
        hidden: { opacity: 0, x: -200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                ease: "easeInOut",
            }
        }
    }

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
                    <motion.img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                        ref={blobRefOne}
                        initial="hidden"
                        animate={controlsOne}
                        variants={blobVariants}
                    />
                    <ImgSynestify darkMode={darkMode} />
                </div>
                {cards[0]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <motion.img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                        ref={blobRefTwo}
                        initial="hidden"
                        animate={controlsTwo}
                        variants={blobVariants}
                    />
                    <VectorGPC darkMode={darkMode} />
                </div>
                {cards[1]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <motion.img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                        ref={blobRefThree}
                        initial="hidden"
                        animate={controlsThree}
                        variants={blobVariants}
                    />
                    <VectorMech darkMode={darkMode} />
                </div>
                {cards[2]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <motion.img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                        ref={blobRefFour}
                        initial="hidden"
                        animate={controlsFour}
                        variants={blobVariants}
                    />
                    <ImgScraper darkMode={darkMode} />
                </div>
                {cards[3]}
            </motion.div>
            <motion.div className="project-card">
                <div className="card-image-wrap">
                    <motion.img 
                        src={require(`./projectCard/projectBlobs/blob_01.png`)}
                        className={`card-image blob odd-blob`}
                        alt="blob"
                        ref={blobRefFive}
                        initial="hidden"
                        animate={controlsFive}
                        variants={blobVariants}
                    />
                    <VectorMedia darkMode={darkMode} />
                </div>
                {cards[4]}
            </motion.div>
        </div>
    )
}