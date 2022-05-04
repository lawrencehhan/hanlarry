import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import './background.css';
import { DoubleSide } from 'three';


export default function BackgroundCanvas() {
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
        useFrame((state, delta) => (mesh.current.rotation.x -= 0.005))
        useFrame((state, delta) => (mesh.current.rotation.y -= 0.005))
        return (
            <mesh
                {...props}
                ref={mesh}>
                <icosahedronGeometry args={[1.5, 2]} />  {/* radius, detail */}
                <meshPhongMaterial color="#ffffff" wireframe={true} side={DoubleSide} />
            </mesh>
        )
    }
    function Plane(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)

        return (
            <mesh
                {...props}
                ref={mesh}>
                <planeGeometry args={[100, 100]} />  {/* radius, detail */}
                <meshNormalMaterial side={DoubleSide} transparent={true} opacity={0.3} />
            </mesh>
        )
    }

    function SphereTest(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
        useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
        return (
          <mesh
            {...props}
            ref={mesh}>
            <sphereGeometry args={[1,128,128]} /> {/* radius, widthSeg, heightSeg */}
            <meshPhysicalMaterial transmission={0.7} thickness={0.7} roughness={0.65} color="#ffffff" />
          </mesh>
        )
    }
    
    
    return (
        <div className='bg' id='canvas-container'>
            {/* default: camera={ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] } */}
            <Canvas>
                <ambientLight intensity={0.3}/>
                <pointLight intensity={1.0} position={[10, 10, 10]} color="#FFAE00"/>
                <Sphere position={[0,0,0]} />
                <Skeleton position={[0,0,0]} />
                <Plane position={[0,0,-200]} />
                {/* <SphereTest position={[0,0,0]} /> */}
            </Canvas>
        </div>
    )
}