import React from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <div className='nav-wrapper'>
            <div className='logo-wrapper'>
                <div className='logo-container'></div>
            </div>
            <div className='name-wrapper'></div>
            <div className='links-wrapper'>
                <ul className='links-container'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
};