import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <div className='contact-container'>
                    <div className='title-container'>
                        <p className='title-container-text'>Contact</p>
                    </div>
                    <div className='info-wrapper'>
                        <ul className='info'>
                            <li className='link'>Email: <a href="mailto:jodilparker@gmail.com?Subject=I like your portfolio and want to know more" target="_blank">jodilparker@gmail.com</a></li>
                            <li>Phone: 801-949-6842</li>
                        </ul>
                        <ul className='social'>
                            <li><a href='https://www.linkedin.com/in/jodiparker/' target='_blank'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            <li><a href='https://github.com/jodilark/' target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className='closingX' onClick={_ => this.props.actionShowContact()}>X</div>
                </div>
            </div>
        )
    }
}