import React from 'react';
interface techData {
    name: string;
    icon: string;
    iconDarkMode: string;
    darkMode: boolean;
}


export default function TechIcons(props:techData) {
    const { name, icon, iconDarkMode, darkMode } = props
    return (
        <img src={require(`../../assets/techs/${darkMode ? iconDarkMode : icon}`)} className={`tech-icon ${name}`} title={name} alt={name} />
    )
}