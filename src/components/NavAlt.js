import React from 'react';
import '../styles/NavAlt.css';

export default function NavAlt(){
    return (
        <div className='nav-wrapper'>
            <div className='top'>Jodi Parker | UX/UI Designer | Web Developer</div>
            <div className='left sideNav' style={{transform: "rotate(90deg) translate(0px, -90px)"}}>About</div>
            <div className='right sideNav' style={{transform: "rotate(-90deg) translate(0px, -90px)"}}>Contact</div>
            {/*<div className='bottom'>Contact</div>*/}
        </div>
    )
};