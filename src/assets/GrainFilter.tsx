import React from 'react';

export default function GrainFilter() {
    
    return(
        <svg className={`grain`}>
            <filter id='grainFilter'>
                <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.72' 
                stitchTiles='stitch'/>
                <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                <feComposite in2="SourceGraphic" result="monoNoise" operator="in"/>
                <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
            </filter>
        </svg>
    )
}