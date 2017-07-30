import React, { Component } from 'react';
import '../styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-wrapper'>
                <div className='logo-wrapper'>
                    <div className='logo-container'></div>
                </div>
                <div className='name-wrapper'>Site is still under development...</div>
                <div className='links-wrapper'>
                    <ul className='links-container'>
                        <li onClick={_ => this.props.actionShowAbout()}>About</li>
                        <li>Portfolio</li>
                        <li onClick={_ => this.props.actionShowContact()}>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
};