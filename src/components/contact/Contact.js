import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <div className='contact-container'>
                    <p>Contact</p>
                    <ul className='info'>
                        <li>Email: jodilparker@gmail.com</li>
                        <li>Phone: 801-949-6842</li>
                    </ul>
                    <ul className='social'>
                        <li><a href='https://www.linkedin.com/in/jodiparker/' target='_blank'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href='https://github.com/jodilark/' target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a></li>
                    </ul>
                    <div className='closingX' onClick={_ => this.props.actionShowContact()}>X</div>
                </div>
            </div>
        )
    }
}