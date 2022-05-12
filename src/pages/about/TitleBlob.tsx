import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Blob {
  darkMode: boolean;
}
export default function TitleBlob(props:Blob) {
  const { darkMode } = props;
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
      if (inView) {
          controls.start("visible")
      }
  }, [controls, inView])

  // Framer-Motion Variants
  const svgBanner = {
    visible: {
      transition: {
        when: 'beforeChildren',
        delayChildren: 1,
        staggerChildren: 1,
      }
    }
  }
  const strokeVariant = {
    hidden: {
      pathLength: 0
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  }
  const gradientVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="332"
      height="303"
      fill="none"
      viewBox="0 0 332 303"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={svgBanner}
      className="title-blob"
    >
      {/* Border path */}
      <motion.path
        stroke={darkMode ? "#FCF7FF" : "#2A2B2A"}
        d="M149.563 1.626c46.362 3.726 79.539 38.858 110.403 73.804 34.082 38.591 80.776 79.342 69.246 129.61-11.521 50.223-70.189 69.118-118.692 85.948-39.955 13.864-82.917 16.484-120.5-2.949-36.382-18.811-55.881-55.742-68.576-94.812-14.916-45.908-33.72-97.434-6.913-137.523C42.954 13.197 98.744-2.458 149.563 1.626z"
        clipRule="evenodd"
        variants={strokeVariant}
      ></motion.path>
      <motion.path
        fill="url(#paint0_linear_17_1035)"
        fillRule="evenodd"
        d="M149.563 1.626c46.362 3.726 79.539 38.858 110.403 73.804 34.082 38.591 80.776 79.342 69.246 129.61-11.521 50.223-70.189 69.118-118.692 85.948-39.955 13.864-82.917 16.484-120.5-2.949-36.382-18.811-55.881-55.742-68.576-94.812-14.916-45.908-33.72-97.434-6.913-137.523C42.954 13.197 98.744-2.458 149.563 1.626z"
        clipRule="evenodd"
        variants={gradientVariant}
      ></motion.path>
      <motion.path
        fill="url(#paint1_linear_17_1035)"
        fillOpacity="0.2"
        fillRule="evenodd"
        d="M149.563 1.626c46.362 3.726 79.539 38.858 110.403 73.804 34.082 38.591 80.776 79.342 69.246 129.61-11.521 50.223-70.189 69.118-118.692 85.948-39.955 13.864-82.917 16.484-120.5-2.949-36.382-18.811-55.881-55.742-68.576-94.812-14.916-45.908-33.72-97.434-6.913-137.523C42.954 13.197 98.744-2.458 149.563 1.626z"
        clipRule="evenodd"
        variants={gradientVariant}
      ></motion.path>
      <motion.path
        fill="url(#paint2_linear_17_1035)"
        fillOpacity="0.2"
        fillRule="evenodd"
        d="M149.563 1.626c46.362 3.726 79.539 38.858 110.403 73.804 34.082 38.591 80.776 79.342 69.246 129.61-11.521 50.223-70.189 69.118-118.692 85.948-39.955 13.864-82.917 16.484-120.5-2.949-36.382-18.811-55.881-55.742-68.576-94.812-14.916-45.908-33.72-97.434-6.913-137.523C42.954 13.197 98.744-2.458 149.563 1.626z"
        clipRule="evenodd"
        variants={gradientVariant}
      ></motion.path>
      <defs>
        <linearGradient
          id="paint0_linear_17_1035"
          x1="31"
          x2="286.5"
          y1="282"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCF7FF"></stop>
          <stop offset="1" stopColor="#FCF7FF" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_17_1035"
          x1="357"
          x2="-34.5"
          y1="221.5"
          y2="78.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5BFBD8"></stop>
          <stop offset="1" stopColor="#5BFBD8" stopOpacity="0.51"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_17_1035"
          x1="166"
          x2="166"
          y1="1"
          y2="302"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.177" stopColor="#D7C9FF"></stop>
          <stop offset="1" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#D7C9FF" stopOpacity="0.5"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
