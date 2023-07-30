import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Vector {
    darkMode: boolean;
}

// ID:3 - gpcVector
export default function VectorGPC(props:Vector) {
    const { darkMode } = props; // #FCF7FF #2A2B2A

    const controls = useAnimation()
    const { ref, inView } = useInView()
    const [ alreadyViewed, setAlreadyViewed ] = useState<boolean>(false) // required to prevent jitters from framer-motion repeats as they restart
    
    useEffect(() => {
        if (!alreadyViewed && inView) {
            controls.start("visible")
            setAlreadyViewed(prevAlreadyViewed => !prevAlreadyViewed)
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
                staggerChildren: 0.5
            }
        }
    }
    const rotVal = 3.5
    const columnVariants = {
        hidden: { rotate: -rotVal, },
        visible: { 
            rotate: [ -rotVal, rotVal, -rotVal ],
            transition: {
                repeat: Infinity,
                ease: "easeInOut",
                duration: 3,
            }
        }
    }
    const partVal = 6
    const particleVariants = {
        hidden: { y: partVal },
        visible: {
            y: [partVal, -partVal, partVal],
            transition: {
                repeat: Infinity,
                ease: "easeInOut",
                duration: 2.5,
            }
        }
    }
    const arrowVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: { 
                delay: 2.5,
                duration: 5,
                ease: [0.6, 0.01, -0.05, 0.95]
            }
        }
    }
    const techVariants = { 
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                delay: 2.5,
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
    const finalVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 4,
                duration: 2,
                ease: "easeInOut"
            }
        }
    }


    return (
        <div className="card-image card-link">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="364"
                height="366"
                fill="none"
                viewBox="0 0 364 366"
                className="example"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                >
                {/* Circles */}
                <motion.circle cx="43.5" cy="32.5" r="22" stroke={darkMode ? "#6CC0F2" : "#4390F9"}
                    variants={particleVariants}
                ></motion.circle>
                <motion.circle cx="116.5" cy="22.5" r="22" stroke={darkMode ? "#6CC0F2" : "#4390F9"}
                    variants={particleVariants}
                ></motion.circle>
                <motion.circle cx="93.5" cy="119.5" r="22" stroke={darkMode ? "#6CC0F2" : "#4390F9"}
                    variants={particleVariants}
                ></motion.circle>
                {/* Column */}
                <motion.path
                    fill={darkMode ? "#FCF7FF" : "#2A2B2A"}
                    fillRule="evenodd"
                    d="M167.446 25.205c-1.179-.182-2.635-.094-4.315 1.209-1.668 1.293-3.533 3.766-5.609 8.288l-.007.015-.006.016c-.734 1.958-.625 3.376-.492 4.588l.019.173c.117 1.057.209 1.892-.201 2.882l-132.41 35.48c-.838-.65-1.173-1.416-1.598-2.383l-.07-.16c-.49-1.115-1.106-2.398-2.72-3.727l-.013-.01-.013-.01c-4.06-2.878-6.911-4.087-9.002-4.374-2.077-.284-3.375.346-4.301 1.08-3.59 1.19-3.344 13.87.579 28.51 3.958 14.773 10.16 25.946 13.854 24.957-.185-.03.046.17 0 0 1.186.191 3.03.452 4.73-.866 1.667-1.294 3.532-3.767 5.608-8.289l.007-.015.006-.015c.734-1.959.625-3.377.492-4.589l-.019-.173c-.116-1.05-.208-1.88.192-2.862l131.978-35.363c.837.65 1.173 1.415 1.597 2.383l.07.159c.491 1.116 1.106 2.398 2.721 3.727l.012.011.014.01c4.059 2.877 6.911 4.087 9.002 4.373 2.131.292 3.442-.38 4.374-1.137a.46.46 0 00.135-.534c3.243-1.845 2.893-14.186-.907-28.364-3.906-14.58-9.998-25.652-13.707-24.99zm-1.301.872c-.72.073-1.533.356-2.448 1.066-1.494 1.158-3.28 3.47-5.33 7.929-.652 1.752-.559 2.997-.433 4.149l.011.093.013.117c.12 1.071.241 2.154-.325 3.426a.46.46 0 01-.332.35L24.463 78.8a.46.46 0 01-.398-.064c-1.181-.829-1.627-1.849-2.068-2.858l-.084-.193c-.467-1.06-1.009-2.186-2.45-3.377-4.005-2.837-6.707-3.946-8.58-4.202-1.137-.156-1.978.002-2.636.293 3.72 1.605 8.934 11.81 12.414 24.798 3.61 13.473 4.107 25.287 1.365 28.012.909.085 1.992-.069 3.279-1.067 1.493-1.158 3.279-3.469 5.329-7.929.652-1.751.559-2.997.433-4.149a78.68 78.68 0 00-.024-.209c-.122-1.093-.246-2.198.36-3.504l.014-.029a.459.459 0 01.287-.227l132.614-35.534.177.124c1.181.828 1.626 1.848 2.067 2.857l.008.018.003.008.074.168c.467 1.06 1.008 2.186 2.449 3.376 4.006 2.838 6.708 3.946 8.58 4.202 1.441.198 2.405-.108 3.126-.552-3.74-.659-9.348-11.271-13.023-24.985-3.487-13.012-4.069-24.477-1.634-27.701zM7.059 69.13a.577.577 0 01-.026.007c-.412.118-.959.653-1.377 2.152-.403 1.445-.598 3.496-.556 6.038.086 5.07 1.113 11.88 3.078 19.216 1.966 7.336 4.482 13.747 6.942 18.18 1.235 2.223 2.43 3.902 3.501 4.952 1.123 1.1 1.868 1.283 2.281 1.172.414-.111.967-.641 1.39-2.156.403-1.445.598-3.496.556-6.038-.086-5.07-1.113-11.88-3.078-19.216-1.966-7.335-4.482-13.747-6.943-18.18-1.234-2.223-2.428-3.901-3.5-4.952-1.111-1.088-1.852-1.279-2.268-1.175zm173.203-18.696c1.965 7.335 2.993 14.145 3.078 19.215.043 2.542-.153 4.593-.556 6.039-.422 1.514-.976 2.045-1.389 2.156-.414.11-1.159-.072-2.282-1.173-1.071-1.05-2.266-2.729-3.5-4.951-2.461-4.433-4.977-10.845-6.942-18.18-1.966-7.336-2.993-14.147-3.078-19.216-.043-2.542.152-4.593.555-6.039.423-1.514.976-2.045 1.39-2.156.413-.11 1.158.072 2.281 1.173 1.072 1.05 2.267 2.728 3.501 4.951 2.461 4.433 4.976 10.845 6.942 18.18z"
                    clipRule="evenodd"
                    variants={columnVariants}
                ></motion.path>
                {/* Arrow */}
                <motion.path
                    d="M209.433 45.001a1.501 1.501 0 00.134 2.997l-.134-2.997zM236 206.5l17.066-2.961-11.097-13.299L236 206.5zM209.567 47.998c31.811-1.419 75.551-2.821 104.037 4.196 7.102 1.75 13.172 4.004 17.843 6.86 4.666 2.853 7.851 6.252 9.356 10.27 2.994 7.993-.363 19.422-14.92 35.675l2.234 2.002c14.643-16.348 19.136-29.01 15.496-38.729-1.812-4.837-5.566-8.699-10.601-11.777-5.03-3.076-11.424-5.424-18.691-7.214-28.989-7.141-73.199-5.694-104.888-4.28l.134 2.997zM325.883 105c-41.885 46.761-67.285 77.734-80.607 91.821l2.18 2.061c13.325-14.09 38.943-45.305 80.661-91.88l-2.234-2.002z"
                    stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    strokeWidth="1"
                    variants={arrowVariants}
                ></motion.path>
                {/* Python */}
                <motion.path
                    fill="url(#paint0_linear_166_35122)"
                    d="M254.8 80.367c-14.104 0-13.223 6.116-13.223 6.116l.016 6.336h13.458v1.903h-18.804s-9.025-1.024-9.025 13.206c0 14.231 7.877 13.726 7.877 13.726h4.701v-6.603s-.253-7.877 7.752-7.877H260.9s7.5.121 7.5-7.248V87.74s1.139-7.374-13.6-7.374zm-7.421 4.26a2.421 2.421 0 11-2.422 2.422 2.435 2.435 0 01.709-1.713 2.418 2.418 0 011.713-.708z"
                    variants={techVariants}
                ></motion.path>
                <motion.path
                    fill="url(#paint1_linear_166_35122)"
                    d="M255.2 135.633c14.104 0 13.223-6.116 13.223-6.116l-.015-6.336h-13.459v-1.902h18.804s9.025 1.023 9.025-13.208c0-14.23-7.877-13.725-7.877-13.725H270.2v6.603s.253 7.877-7.752 7.877H249.1s-7.5-.121-7.5 7.248v12.185s-1.139 7.374 13.6 7.374zm7.421-4.26a2.428 2.428 0 01-1.712-.709 2.425 2.425 0 01-.525-2.64 2.416 2.416 0 013.164-1.31 2.423 2.423 0 011.311 1.31 2.418 2.418 0 010 1.854 2.425 2.425 0 01-1.311 1.311 2.417 2.417 0 01-.927.183v.001z"
                    variants={techVariants}
                ></motion.path>
                {/* Pandas */}
                <motion.path
                    fill="#100850"
                    d="M323.122 152.759h-6.954v14.43h6.954v-14.43zM323.122 182.401h-6.954v14.43h6.954v-14.43z"
                    variants={techVariants}
                ></motion.path>
                <motion.path
                    fill="#FFCA00"
                    d="M323.122 171.401h-6.954v6.808h6.954v-6.808z"
                    variants={techVariants}
                ></motion.path>
                <motion.path
                    fill="#100850"
                    d="M311.954 164.625H305v47.967h6.954v-47.967zM334.063 194.307h-6.954v14.43h6.954v-14.43zM334.063 164.642h-6.954v14.43h6.954v-14.43z"
                    variants={techVariants}
                ></motion.path>
                <motion.path
                    fill="#E70488"
                    d="M334.063 183.284h-6.954v6.808h6.954v-6.808z"
                    variants={techVariants}
                ></motion.path>
                <motion.path 
                    fill="#100850" 
                    d="M345 149h-6.954v47.967H345V149z"
                    variants={techVariants}
                ></motion.path>
                {/* Graph */}
                <motion.path
                    stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M182.5 363.561L45.5 363.561"
                    variants={finalVariants}
                ></motion.path>
                <motion.path
                    stroke={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M45.5 224.5L45.5 361.5"
                    variants={finalVariants}
                ></motion.path>  
                <motion.path
                    stroke={darkMode ? "#6CC0F2" : "#4390F9"}
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                    strokeWidth="3"
                    d="M46 362.844c5.628.389 20.028.35 32.604-2.916 15.72-4.083 16.303-128.315 25.618-116.067 9.316 12.248 7.569 107.318 21.542 110.234 11.179 2.333 38.815 6.805 51.236 8.749"
                    variants={finalVariants}
                ></motion.path>
                <motion.path
                    fill={darkMode ? "#FCF7FFcc" : "#2A2B2A"}
                    d="M212.816 313v-23.84h2.24l8.96 12.992h-1.248l8.928-12.992h2.24V313h-2.56v-20.384l.832.32-8.768 12.704h-.128l-8.736-12.704.8-.32V313h-2.56zm25.316 9.84v-14.189h1.748v2.227l-.231-.441a4.112 4.112 0 011.575-1.459c.665-.372 1.427-.557 2.284-.557.973 0 1.844.237 2.612.71a5.077 5.077 0 011.843 1.939c.448.807.672 1.728.672 2.765 0 1.011-.224 1.927-.672 2.746a5.077 5.077 0 01-1.843 1.939c-.768.474-1.645.71-2.631.71a4.757 4.757 0 01-2.285-.556 3.888 3.888 0 01-1.574-1.575l.288-.307v6.048h-1.786zm5.223-5.338c.653 0 1.235-.16 1.747-.48.512-.32.909-.755 1.19-1.305a3.994 3.994 0 00.442-1.882c0-.717-.147-1.344-.442-1.881a3.25 3.25 0 00-1.19-1.306 3.132 3.132 0 00-1.747-.499c-.653 0-1.242.16-1.767.48-.512.32-.921.761-1.228 1.325-.295.55-.442 1.177-.442 1.881 0 .691.147 1.319.442 1.882.307.55.716.985 1.228 1.305.525.32 1.114.48 1.767.48zm8.504 4.167v-.864c.397-.103.698-.301.903-.595.205-.295.32-.698.345-1.21h-.864v-2.304h1.863v1.632c0 .922-.192 1.664-.576 2.227-.371.563-.928.935-1.671 1.114zm15.23-8.669v-23.84h2.24l8.96 12.992h-1.248l8.928-12.992h2.24V313h-2.56v-20.384l.832.32-8.768 12.704h-.128l-8.736-12.704.8-.32V313h-2.56zm25.316 6v-10.349h1.747v2.016l-.288-.173a3.076 3.076 0 011.229-1.516c.576-.372 1.248-.557 2.016-.557.743 0 1.402.166 1.978.499a3.592 3.592 0 011.382 1.382c.346.589.519 1.255.519 1.997V319h-1.805v-6.125c0-.576-.103-1.062-.307-1.459a2.196 2.196 0 00-.884-.922 2.39 2.39 0 00-1.286-.345c-.486 0-.922.115-1.306.345a2.336 2.336 0 00-.883.941c-.217.397-.326.877-.326 1.44V319h-1.786zm12.021 2.669v-.864c.397-.103.697-.301.902-.595.205-.295.32-.698.346-1.21h-.864v-2.304h1.862v1.632c0 .922-.192 1.664-.576 2.227-.371.563-.928.935-1.67 1.114zM319.655 313v-23.84h2.24l8.96 12.992h-1.248l8.928-12.992h2.24V313h-2.56v-20.384l.832.32-8.768 12.704h-.128l-8.736-12.704.8-.32V313h-2.56zm27.697 6l-3.552-10.349h1.978l2.822 8.659-.691-.019 2.765-8.64h1.69l2.764 8.64-.691.019 2.842-8.659h1.958L355.685 319h-1.709l-2.726-8.64h.538l-2.727 8.64h-1.709z"
                    variants={finalVariants}
                ></motion.path>
                <defs>
                <linearGradient
                    id="paint0_linear_166_35122"
                    x1="232.561"
                    x2="260.093"
                    y1="85.338"
                    y2="112.595"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#387EB8"></stop>
                    <stop offset="1" stopColor="#366994"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_166_35122"
                    x1="249.46"
                    x2="279.026"
                    y1="102.84"
                    y2="130.79"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE052"></stop>
                    <stop offset="1" stopColor="#FFC331"></stop>
                </linearGradient>
                </defs>
            </motion.svg>
        </div>
    )
}