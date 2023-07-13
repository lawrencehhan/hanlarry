import React from 'react';
interface techData {
    name: string;
    icon: string;
    iconDarkMode: string;
    darkMode: boolean;
}


export default function TechIcons(props:techData) {
    const { name, icon, iconDarkMode, darkMode } = props
    const displayName = name[0].toUpperCase() + name.substring(1);

    return (
        <div className={`tech-icon ${name}`}>
            <img 
                src={require(`../../assets/techs/${darkMode ? iconDarkMode : icon}`)}  
                className={'tech-icon-image'}
                title={name} 
                alt={name} />
            <p className="tech-icon-name">{displayName}</p>
        </div>
    )
}