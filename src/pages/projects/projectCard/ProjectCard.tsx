import React from 'react';
import { motion } from 'framer-motion';
interface Card {
    darkMode: boolean;
    id: number;
    title: string;
    text: string;
    techList: string[];
    image: string;
    blob: string;
    link?: string;
}


export default function ProjectCard(props:Card) {
    const { darkMode, id, title, text, techList, blob, image, link } = props;
    let odd:boolean = ( id % 2 !== 0 )
    console.log(id)
    console.log(odd)

    // Card is split into image section and text section
    // // 'odd' will alternate order of the two sections per card
    const CardImage = ({blob, image}) => {
        return (
            <div className="card-image-wrap">
                <img 
                    src={require(`./projectBlobs/${blob}`)}
                    className={`card-image blob ${odd ? "odd-blob" : "even-blob"}`}
                    alt="blob"
                />
                <a href={link} target="_blank" className="card-image card-link">
                    <img 
                        src={require(`./projectImages/${image}`)}
                        className="example"
                        alt="card-image"
                    />
                </a>
            </div>
        )
    }
    const CardText = ({title, text, techList, link}) => {
        const usedTech = techList.map((tech, i) => {
            let lastCheck:boolean = ( i !== techList.length-1 )
            return (
                <span>&nbsp;{tech}{lastCheck && "\u000A \u2022"}</span>
            )
        })

        return (
            <div className="card-text">
                <a href={link} target="_blank" className={`card-text-title ${odd && "odd-card"}`}>{title}</a>
                <p className={`card-text-text`}>{text}</p>
                <p className={`card-text-tech ${odd && "odd-card"}`}>{usedTech}</p>
            </div>
        )
    }

    // Returning card
    if (odd) {
        return (
            <motion.div className="project-card">
                <CardImage blob={blob} image={image} />
                <CardText title={title} text={text} techList={techList} link={link} />
            </motion.div>
        )
    } else {
        return (
            <motion.div className="project-card">
                <CardText title={title} text={text} techList={techList} link={link}/>
                <CardImage blob={blob} image={image} />
            </motion.div>
        )  
    }
}