import React from 'react';
import './contact.css';

interface Contact {
    darkMode: boolean;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Contact(props:Contact) {
    const {darkMode, contactRef} = props;
    return (
        <div className={`contact page ${darkMode && "dark"}`} ref={contactRef}>
            Contact Page
        </div>
    )
}