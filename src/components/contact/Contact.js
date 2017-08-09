import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <div className='contact-info-wrapper'>
                    <a className='one' href="mailto:jodilparker@gmail.com?Subject=I like your portfolio and want to know more" target="_blank">
                        <span className='link' id='email-link'><div className='contact-text'>jodilparker@gmail.com</div></span>
                        <div className='social fa fa-envelope-square'></div>
                    </a>
                    <div className='two'>
                        <div className='social fa fa-phone-square'></div>
                        <div className='contact-text'>801-949-6842</div>
                    </div>
                </div>
                <div className='contact-info-wrapper'>
                    <a className='one' href='https://www.linkedin.com/in/jodiparker' target='_blank'>
                        <span className='link' id='linkedIn-link'><div className='contact-text'>https://www.linkedin.com/in/jodiparker</div></span>
                        <div className='social fa fa-linkedin-square'></div>
                    </a>
                    <a className='two' href='https://github.com/jodilark' target='_blank'>
                        <div className='social fa fa-github-square'></div>
                        <span className='link' id='github-link'><div className='contact-text'>https://github.com/jodilark</div></span>
                    </a>
                </div>
                <svg height="124" width="500">
                    <line x1="50%" y1="0" x2="50%" y2="200" className="line" />
                    <line x1="0" y1="50%" x2="500" y2="50%" className="line" />
                </svg>
            </div>
        )
    }
}