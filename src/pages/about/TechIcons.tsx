import React from 'react';
interface techData {
    name: string;
    icon: string;
    iconDarkMode: string;
    darkMode: boolean;
}


export default function TechIcons(props:techData) {
    const { name, icon, iconDarkMode, darkMode } = props
    console.log(iconDarkMode)
    return (
        <div className={`tech-icon-wrap ${name}`}>
            <img src={require(`../../assets/techs/${darkMode ? iconDarkMode : icon}`)} className='tech-icon' alt={name} />
        </div>
    )
}