import React, { Component } from 'react';
import '../styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-wrapper'>
                <div className='logo-wrapper'>
                    <div className='logo-container'></div>
                </div>
                <div className='name-wrapper'><span className='my-titles'>Jodi Parker | UX/UI | Web Developer</span></div>
                <div className='links-wrapper'>
                    <ul className='links-container'>
                        <li onClick={_ => this.props.actionShowAbout()}>About Me</li>
                        <li onClick={_ => this.props.actionShowContact()}>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
};