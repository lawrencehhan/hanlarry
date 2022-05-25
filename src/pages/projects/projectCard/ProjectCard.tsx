import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Card {
    darkMode: boolean;
    id: number;
    title: string;
    text: string;
    techList: string[];
    // blob: string;
    // isVector: boolean;
    // image: string;
    link?: string;
}


export default function ProjectCard(props:Card) {
    const { darkMode, id, title, text, techList, link} = props;
    let odd:boolean = ( id % 2 !== 0 ) 
    const controls = useAnimation()
    const { ref, inView } = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        }
    }
    // Card is split into image section and text section
    // // 'odd' will alternate order of the two sections per card
    // const CardImage = ({blob, image, isVector}) => {
    //     return (
            // <div className="card-image-wrap">
            //     <img 
            //         src={require(`./projectBlobs/${blob}`)}
            //         className={`card-image blob ${odd ? "odd-blob" : "even-blob"}`}
            //         alt="blob"
            //     />
            //     <a href={link} target="_blank" className="card-image card-link">
            //         {/* <img 
            //             src={require(`./projectImages/${image}`)}
            //             className="example"
            //             alt="card-image"
            //         />  */}
            //         {/* {vectorGraphic} */}
            //     </a>
            // </div>
    //     )
    // }

    // Creating span elements for each tech used into one line
    const usedTech = techList.map((tech, i) => {
        let lastCheck:boolean = ( i !== techList.length-1 )
        return (
            <span>&nbsp;{tech}{lastCheck && "\u000A \u2022"}</span>
        )
    })

    return (
        <motion.div className="card-text"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}>
            <a href={link} target="_blank" className={`card-text-title ${odd && "odd-card"} ${darkMode && "dark"}`}>{title}</a>
            <p className={`card-text-text`}>{text}</p>
            <p className={`card-text-tech ${odd && "odd-card"}`}>{usedTech}</p>
        </motion.div>
    )


    // // Returning card
    // if (odd) {
    //     return (
    //         <motion.div className="project-card">
    //             {/* <CardImage blob={blob} image={image} isVector={isVector}/> */}
    //             <CardText title={title} text={text} techList={techList} link={link} />
    //         </motion.div>
    //     )
    // } else {
    //     return (
    //         <motion.div className="project-card">
    //             <CardText title={title} text={text} techList={techList} link={link}/>
    //             {/* <CardImage blob={blob} image={image} isVector={isVector} /> */}
    //         </motion.div>
    //     )  
    // }
}