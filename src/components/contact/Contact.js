import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div className='contact-wrapper'>
            <div className='contact-container'>
                <p>Contact</p>
                <ul className='info'>
                    <li>Email: jodilparker@gmail.com</li>
                    <li>Phone: 801-949-6842</li>
                </ul>
                <ul className='social'>
                    <li>Linkedin</li>
                    <li>github</li>
                </ul>
            </div>
        </div>
    )
}