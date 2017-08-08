import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper' id='contact'>
                <div className='contact-info-wrapper'>
                    <div className='one'>
                        <div className='contact-text'>jodilparker@gmail.com</div>
                        <div className='social fa fa-envelope-square'></div>
                    </div>
                    <div className='two'>
                        <div className='social fa fa-phone-square'></div>
                        <div className='contact-text'>801-949-6842</div>
                    </div>
                </div>
                <div className='contact-info-wrapper'>
                    <div className='one'>
                        <div className='contact-text'>https://www.linkedin.com/in/jodiparker</div>
                        <div className='social fa fa-linkedin-square'></div>
                    </div>
                    <div className='two'>
                        <div className='social fa fa-github-square'></div>
                        <div className='contact-text'>https://github.com/jodilark</div>
                    </div>                    
                </div>
                <svg height="124" width="500">
                    <line x1="50%" y1="0" x2="50%" y2="200" className="line" />
                    <line x1="0" y1="50%" x2="500" y2="50%" className="line" />
                </svg>
            </div>
        )
    }
}