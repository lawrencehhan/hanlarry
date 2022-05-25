import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Img {
    darkMode: boolean;
}

// ID:7 Scraper
export default function ImgScraper(props:Img) {
    const { darkMode } = props; // #FCF7FF #2A2B2A

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


    return (
        <motion.a 
            href={"https://github.com/lawrencehhan/richard-magic"}
            target="_blank" 
            className="card-image card-link"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}>
                <img 
                    src={require(`../projectImages/${darkMode?"scraper_exampleDM.png":"scraper_example.png"}`)}
                    className="example"
                    alt="card-image"
                />
        </motion.a>
    )
}