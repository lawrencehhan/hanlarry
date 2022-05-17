import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Blob {
    darkMode: boolean;
  }

export default function DetailBlob(props:Blob) {
    const { darkMode } = props;
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible")
      }
    }, [controls, inView])

    const blobTransition = {
      delay: 2,
      duration: 8,
      repeat: Infinity,
      repeatType: undefined,
    }
    const ypos = 12
    const variants = {
      hidden: { opacity: 0, y: ypos },
      // visible: {
      //     opacity: [1, 1, 1, 1, 1],
      //     y: [ypos, ypos*-1, ypos, ypos*-1, ypos],
      //     transition: blobTransition,
      // }
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 2,
          duration: 2,
        },
      }
    }

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="695"
        height="560"
        fill="none"
        viewBox="0 0 695 560"
        className="detail-blob"
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={variants}
      >
        <path
          stroke={darkMode ? "#FCF7FF" : "#2A2B2A"}
          d="M353.968 3.903C446.219-.58 546.929-8.567 611.906 57.068c71.701 72.428 97.564 182.313 73.122 281.252-23.975 97.05-100.543 173.637-194.16 208.706-84.539 31.668-171.019-5.61-254.17-40.761-91.406-38.64-205.452-68.11-230.506-164.13-25.451-97.54 47.194-191.161 119.46-261.444C186.211 21.794 269.59 8 353.968 3.903z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
    );
  }