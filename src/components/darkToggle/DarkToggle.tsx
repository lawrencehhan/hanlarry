import React from "react";
import './darkToggle.css';
interface DarkProp {
    darkMode: boolean;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function DarkToggle(props: DarkProp) {
    const {darkMode, handleDarkToggle} = props
    const toggleValue = darkMode ? "darkMode" : "lightMode";
    console.log('darkmode is set to : '+ darkMode)
    return (
        <div className="button-row">
            <input
                className="toggle-button"
                type="checkbox"
                name="DarkToggle"
                id={toggleValue}
                value={toggleValue}
                checked={darkMode}
                onChange={handleDarkToggle} 
            />
            <label
                className="toggle-label"
                htmlFor={toggleValue}
            >
                <span className="toggle-switch" />
            </label>
        </div>
    )
}