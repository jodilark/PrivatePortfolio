import React, { Component } from 'react';
import '../styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-wrapper' >
                <div className='logo-wrapper'>
                    <div className='logo-container'></div>
                </div>
                <div className='name-wrapper'><span className='my-titles'></span></div>
                <div className='links-wrapper'>
                    <ul className='links-container'>
                        <li onClick={_ => this.props.actionShowAbout()}>Web Developer Projects</li>
                        <li onClick={_ => this.props.actionShowAbout()}>UI/UX Projects</li>
                        <li onClick={_ => this.props.actionShowAbout()}>Skills</li>
                        <li onClick={_ => this.props.actionShowAbout()}>About Me</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div >
        )
    }
};