import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import * as THREE from 'three';
import { DoubleSide, FrontSide } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import './background.css';
import { noise } from '../../Perlin';
interface bgCanvas {
    darkMode: boolean;
}

export default function BackgroundCanvas(props:bgCanvas) {
    const { darkMode } = props
    const [darkColor, lightColor] = [0x2A2B2A, 0xFCF7FF]
    
    // Variants framer-motion
    const variants = {
        hidden: { y: 300, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 2,
                delay: 7,
            }
        },
        hide: {
            opacity: 0,
            x: 300,
            transition: {
                ease: "easeInOut",
                duration: 2,
            }
        }
    }


    // When forming a MESH with useFrame(), it must be its own component, outside of App()
    function Sphere(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
        useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
        return (
          <mesh
            {...props}
            ref={mesh}>
            <sphereGeometry args={[1,128,128]} /> {/* radius, widthSeg, heightSeg */}
            <meshNormalMaterial />
          </mesh>
        )
    }

    function Skeleton(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        useFrame(() => (mesh.current.rotation.x += 0.002))
        useFrame(() => (mesh.current.rotation.y += 0.002))
        return (
            <mesh
                {...props}
                ref={mesh}>
                <icosahedronGeometry args={[1.1, 2]} />  {/* radius, detail */}
                <meshPhongMaterial color={darkMode ? lightColor:darkColor} wireframe={true} wireframeLinewidth={200} side={DoubleSide} />
            </mesh>
        )
    }
    function BackgroundPlane(props: JSX.IntrinsicElements['mesh']) {
        const meshPlane = useRef<THREE.Mesh>(null!)
        return (
            <mesh
                {...props}
                receiveShadow
                ref={meshPlane}>
                <planeGeometry attach="geometry" args={[1000, 1000]} />
                <meshStandardMaterial attach="material" color={darkMode ? darkColor:lightColor} side={DoubleSide} transparent={true} opacity={0.3} />
            </mesh>
        )
    }
    function BlurPlane(props: JSX.IntrinsicElements['mesh']) {
        const meshPlane = useRef<THREE.Mesh>(null!)
        useEffect(() => {
            // meshPlane.current.rotation.x = Math.PI / 4 * -1
        })

        return (
            <mesh
                {...props}
                ref={meshPlane}>
                <planeGeometry attach="geometry" args={[1000, 1000]} />
                <meshStandardMaterial attach="material" color={lightColor} side={DoubleSide} transparent={true} opacity={0.0} />
            </mesh>
        )
    }

    function Test(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        // let ogPosition = useRef<THREE.BufferAttribute | THREE.InterleavedBufferAttribute>(null!)
        let ogGeo = useRef<THREE.BufferGeometry>(null!)

        // Saving original position as a reference
        useEffect(() => {
            // const { geometry } = mesh.current
            // const { position } = geometry.attributes // vertices of geometry
            // ogPosition.current = position // Saved here as mesh is not declared yet outside
            const { geometry } = mesh.current
            ogGeo.current = geometry  
        }, [])


        // Rotating animation
        useFrame(({ clock }) => {
            // const time = clock.getElapsedTime()
            mesh.current.rotation.x -= 0.005
            mesh.current.rotation.y -= 0.01
        })
        console.log('Render Check')
        // Accessing vertices
        useEffect(() => {
            // const { geometry } = mesh.current
            // const { position } = geometry.attributes // vertices of geometry

            // // WORKING
            // console.log('ogGeo before')
            // console.log(ogGeo.current.attributes.position)
            // console.log('mesh before')
            // console.log(mesh.current.geometry.attributes.position)
            // let vertex = new THREE.Vector3()
            // for (let i=0; i < 240; i++) {
            //     vertex.fromBufferAttribute(ogGeo.current.attributes.position, i)
            //     console.log('Vertex before:')
            //     console.log(vertex)
            //     console.log('Vertex X val')
            //     console.log(vertex.x)
            //     console.log(noise.simplex3(0.5, 1, 0.5))
            //     let perlin = noise.simplex3(
            //         (vertex.x * 0.9) + (6000000000), // xyz coeff affecting extreme spike appearences when closer to 1
            //         (vertex.y * 0.9)+ (6000000000), // added term is just increasing time
            //         (vertex.z * 0.9)+ (6000000000))
            //     let scale = 1 + (perlin * 0.1) // perlin coefficient affecting drasticness of size change from 1
            //     vertex.multiplyScalar(scale)
            //     console.log('Vertex after')
            //     console.log(vertex)
            //     console.log('Vertex X val')
            //     console.log(vertex.x)

            //     mesh.current.geometry.attributes.position.setXYZ(i, vertex.x, vertex.y, vertex.z)
            //     // mesh.current.geometry.attributes.position.needsUpdate = true
            //     console.log(mesh.current.geometry.attributes.position.getX(i))
            // }
            // mesh.current.geometry.attributes.position.needsUpdate = true
            // console.log('ogGeo after')
            // console.log(ogGeo.current.attributes.position)
            // console.log('mesh after')
            // console.log(mesh.current.geometry.attributes.position)
            

            // ogPosition.current = position // Held constant as an OG reference

            // /// testing area
            // const ogPos = ogPosition.current
            // const newPos = mesh.current.geometry.getAttribute("position"); // Current state
            // const newPosArr = Float32Array.from(newPos.array) // Copy of Current
            // console.log("-- START -- ")
            // console.log('OG Array' + ogPos.array)    
            // console.log('Mesh Current' + newPos.array)    
            // console.log('Mesh Current Copy' + newPosArr.slice(0,5))
            // for (let vertex=0; vertex<ogPos.count; vertex++) {
            //     let x = ogPos.array[vertex*3] // Unlike THREE.vector3 types, vertices are not objects with .x.y.z
            //     let y = ogPos.array[(vertex*3)+1] // three-fiber has the vertex values in one array
            //     let z = ogPos.array[(vertex*3)+2]
            //     let perlin = noise.simplex3(
            //         (x*0.006) + (0 * 0.0005),
            //         (y*0.006) + (0 * 0.0005),
            //         (z*0.006)
            //     )
            //     let ratio = ((perlin * 0.3 *0.1) + 0.8)
            //     newPosArr[vertex*3] = newPosArr[vertex*3] * ratio
            //     newPosArr[(vertex*3)+1] = newPosArr[(vertex*3)+1] * ratio
            //     newPosArr[(vertex*3)+2] = newPosArr[(vertex*3)+2] * ratio
            // }
            // console.log("-- After Loop -- ")
            // console.log('OG Array' + ogPos.array)    
            // console.log('Mesh Current' + newPos.array)    
            // console.log('Mesh Current Copy' + newPosArr.slice(0,5))
            // mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(newPosArr, 3));
            // mesh.current.geometry.attributes.position.needsUpdate = true;
            // const finalArr = mesh.current.geometry.getAttribute("position").array
            // console.log(finalArr)

            // const ogPos = ogPosition.current
            // const curPos = mesh.current.geometry.getAttribute("position"); // Current position of mesh
            // const newPosArr = Float32Array.from(ogPos.array) // Template of current position to be scaled
            // console.log(newPosArr)
            // for (let vertex=0; vertex<ogPos.count; vertex++) {
            //     let x = ogPos.array[vertex*3] // Unlike THREE.vector3 types, vertices are not objects with .x.y.z
            //     let y = ogPos.array[(vertex*3)+1] // three-fiber has the vertex values in one array
            //     let z = ogPos.array[(vertex*3)+2]
            //     let perlin = noise.simplex3(
            //         (x*0.006) + (1 * 0.0002),
            //         (y*0.006) + (1 * 0.0003),
            //         (z*0.006)
            //     )
                
            //     let ratio = ((perlin * 0.3 ) + 1)
            //     newPosArr[vertex*3] = newPosArr[vertex*3] * ratio
            //     newPosArr[(vertex*3)+1] = newPosArr[(vertex*3)+1] * ratio
            //     newPosArr[(vertex*3)+2] = newPosArr[(vertex*3)+2] * ratio
            // }
            // console.log(mesh.current.geometry.getAttribute('position'))
            // mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(newPosArr, 3));
            // mesh.current.geometry.attributes.position.needsUpdate = true;
            // console.log(mesh.current.geometry.getAttribute('position'))
            // console.log('Updated Mesh')

            
        }, [])

        useFrame(({ clock }) => {
            const time = clock.getElapsedTime()
            const { geometry } = mesh.current
            const { position } = geometry.attributes // vertices of geometry

            // // WORKING part 1
            let vertex = new THREE.Vector3()
            
            for (let i=0; i < ogGeo.current.attributes.position.count; i++) {
                // vertex.fromBufferAttribute(ogGeo.current.attributes.position, i).setLength(1)
                vertex.fromBufferAttribute(ogGeo.current.attributes.position, i)
                let perlin = noise.simplex3(
                    (vertex.x * 0.7) + (time), // xyz coeff affecting extreme spike appearences when closer to 1
                    (vertex.y * 0.7)+ (time), // added term is just increasing time
                    (vertex.z * 0.7)+ (time))
                let scale = 1 + (perlin * 0.0005) // perlin coefficient affecting drasticness of size change from 1
                vertex.fromBufferAttribute(ogGeo.current.attributes.position, i)
                vertex.multiplyScalar(scale) // keeps increasing or decreasing by scale for some reason
                // vertex.setLength(scale)
                position.setXYZ(i, vertex.x, vertex.y, vertex.z)
                position.needsUpdate = true
            }
            geometry.computeVertexNormals();








            // ver alpha
            // let vertex = new THREE.Vector3()
            // for (let i=0; i < 240; i++) {
            //     vertex.fromBufferAttribute(ogGeo.current.attributes.position, i)
            //     let perlin = noise.simplex3(
            //         (vertex.x * 0.9) + (time * 0.002), // xyz coeff affecting extreme spike appearences when closer to 1
            //         (vertex.y * 0.9)+ (time * 0.002), // added term is just increasing time
            //         (vertex.z * 0.9)+ (time * 0.002))
            //     let scale = 1 + (perlin * 0.001) // perlin coefficient affecting drasticness of size change from 1
            //     vertex.multiplyScalar(scale)
            //     mesh.current.geometry.attributes.position.setXYZ(i, vertex.x, vertex.y, vertex.z)
            //     mesh.current.geometry.attributes.position.needsUpdate = true
            //     console.log(mesh.current.geometry.attributes.position.getX(i))
            // }

            // ver one
            // const ogPos = ogPosition.current
            // const curPos = mesh.current.geometry.getAttribute("position"); // Current position of mesh
            // const newPosArr = Float32Array.from(ogPos.array) // Template of current position to be scaled
            // for (let vertex=0; vertex<(ogPos.count-3); vertex++) {
            //     let x = ogPos.array[vertex*3] // Unlike THREE.vector3 types, vertices are not objects with .x.y.z
            //     let y = ogPos.array[(vertex*3)+1] // three-fiber has the vertex values in one array
            //     let z = ogPos.array[(vertex*3)+2]
            //     let perlin = noise.simplex3(
            //         (x*0.006) + (time * 0.002),
            //         (y*0.006) + (time * 0.003),
            //         (z*0.006)
            //     )
            //     let ratio = ((perlin * 0.3 ) + 1)
            //     newPosArr[vertex*3] = ogPos.array[vertex*3] * ratio
            //     newPosArr[(vertex*3)+1] = ogPos.array[(vertex*3)+1] * ratio
            //     newPosArr[(vertex*3)+2] = ogPos.array[(vertex*3)+2] * ratio
            // }
            // mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(newPosArr, 3));
            // mesh.current.geometry.attributes.position.needsUpdate = true;
            // console.log('Updated Mesh')

            // ver two
            // let v3 = new THREE.Vector3()
            // for (let i=0; i < position.count; i++) {
            //     v3.fromBufferAttribute(position, i).setLength(3)
            //     let perlin = noise.simplex3(v3.x + time, v3.y + time, v3.z + time)
            //     v3.setLength(1 + 0.3 * 3)
            //     position.setXYZ(i, v3.x, v3.y, v3.z)
            // }
            // position.needsUpdate = true;
            // geometry.computeVertexNormals();

            // ver three
            // const ogPos = ogPosition.current
            // const curPos = geometry.getAttribute('position')
            
            // for ( let vertIndex = 0; vertIndex < curPos.count; vertIndex++ ) {
            //     let vertex = new THREE.Vector3()
            //     vertex.fromBufferAttribute( ogPos, vertIndex )

            //     let perlin = noise.simplex3(
            //         (vertex.x * 0.006) + (time * 0.0002),
            //         (vertex.y * 0.006) + (time * 0.0003),
            //         (vertex.z * 0.006)
            //     )
            //     let ratio = 1 + (perlin * 0.4)
            //     vertex.multiplyScalar( ratio )

            //     mesh.current.geometry.attributes.position.setXYZ(vertIndex, vertex.x, vertex.y, vertex.z)
            // }

            // position.needsUpdate = true
            // console.log('UPdated mesh')

        })
        return (
          <mesh
            {...props}
            ref={mesh}
            castShadow
            receiveShadow={false}>
            <sphereBufferGeometry args={[1,128,128]} /> {/* radius, widthSeg, heightSeg */}
            <meshStandardMaterial 
                color={0xB5D5FE}
                roughness={0.6} 
                metalness={0.2} 
                wireframe={false}
                side={FrontSide} />
          </mesh>
        )
    }

    function Blob(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        let ogGeo = useRef<THREE.BufferGeometry>(null!)

        // Saving original position as a reference
        useEffect(() => {
            const { geometry } = mesh.current
            ogGeo.current = geometry  
        }, [])


        // Rotating animation
        useFrame(() => {
            mesh.current.rotation.x += 0.005
            mesh.current.rotation.y -= 0.005
        })

        // Perlin noise animation
        useFrame(({ clock }) => {
            const time = clock.getElapsedTime() // For incrementing perlin noise calc
            const { geometry } = mesh.current
            const { position } = geometry.attributes // to access vertices of geometry

            let vertex = new THREE.Vector3() // placeholder for new vertex vals
            for (let i=0; i < ogGeo.current.attributes.position.count; i++) {
                vertex.fromBufferAttribute(ogGeo.current.attributes.position, i) // copying original geometry
                let perlin = noise.simplex3(
                    (vertex.x * 0.9) + (time * 1), // vertex coeffs __
                    (vertex.y * 0.9)+ (time * 1), // time component will affect incrementing steps and spike variance
                    (vertex.z * 0.9)+ (time * 1))
                let ratio = 1 + (perlin * 0.00005) // perlin ceoff affects range of change from baseline 1
                vertex.multiplyScalar(ratio)
                position.setXYZ(i, vertex.x, vertex.y, vertex.z)
                position.needsUpdate = true
            }
            geometry.computeVertexNormals();
        })
        return (
          <mesh
            {...props}
            ref={mesh}
            castShadow
            receiveShadow={false}>
            <sphereBufferGeometry args={[ 1.4, 128, 128 ]} /> {/* radius, widthSeg, heightSeg */}
            <meshStandardMaterial 
                color={0xB5D5FE}
                roughness={0.6} 
                metalness={0.2} 
                wireframe={false}
                side={FrontSide} />
          </mesh>
        )
    }
    
    return (
        <motion.div className='bg' id='canvas-container'
            initial="hidden"
            animate="visible"
            exit="hide"
            variants={variants}
        >
            {/* default: camera={ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] } */}
            <Canvas
            shadows
            >
                {/* <color attach="background" args={} /> */}
                {/* <ambientLight intensity={0.1}/> */}
                <pointLight intensity={0.3} position={[150, 150, 15]}/>
                <directionalLight color={ 0x0099FA } intensity={ 0.8 } position={[ 0, 350, 350 ]} castShadow={true} />
                <directionalLight color= { 0x62C7B7 } intensity={ 0.4 } position={[ -300, 400, 350 ]} />
                <directionalLight color= { 0x62C7B7 } intensity={ 0.3 } position={[ 0, -250, 300 ]} />
                <hemisphereLight color={ 0xffffff } groundColor={ 0x000000 } intensity={ 0.8 } />
                {/* <Sphere position={[0,0,0]} /> */}
                <Skeleton position={[.75,0,1]} />
                {/* <BlurPlane position={[ 0, 0, 3 ]}/> */}
                <Blob position={[ 1.75, -0.5, 0 ]} />
            </Canvas>
        </motion.div>
    )
}