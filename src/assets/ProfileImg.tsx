import React from 'react';
import { motion } from 'framer-motion';
import ProfileImgFile from './profile_image_md.png'

export default function ProfileImg() {
    const profileVariant = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 0.95,
            transition: {
                delay: 4.2, 
                type: "spring",
                velocity: 1, // 2 default
                mass: 12, // 1 default
                damping: 15, // 10 default
            }
        },
    }
    
    return(
        <motion.img
        className="profile-img"
        src={ProfileImgFile}
        initial="hidden"
        animate="visible"
        variants={profileVariant}
        >
        
        </motion.img>
    )
}