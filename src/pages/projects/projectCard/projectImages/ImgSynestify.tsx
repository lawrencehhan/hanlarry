import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Img {
    darkMode: boolean;
}

// ID:0 - Synestify
export default function ImgSynestify(props:Img) {
    const { darkMode } = props; // #FCF7FF #2A2B2A

    const controls = useAnimation()
    const { ref, inView } = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0, y: -25, x: -25 },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        }
    }


    return (
        <motion.a 
            href={"https://www.synestify.com"}
            target="_blank" 
            className="card-image card-link"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}>
                <img 
                    src={require(`./${darkMode?"synestify_exampleDM.png":"synestify_example.png"}`)}
                    className="example"
                    alt="card-image"
                />
        </motion.a>
    )
}