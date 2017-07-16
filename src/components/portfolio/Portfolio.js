import React from 'react';
import './portfolio.css'

export default function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <div className='port-piece-container'></div>
            <div className='port-info'>
                <ul>
                    <li>site name | www.sitelink.com</li>
                    <li>Tech | used</li>
                    <li>Role</li>
                    <li>Description</li>
                </ul>
            </div>
        </div>
    )
}