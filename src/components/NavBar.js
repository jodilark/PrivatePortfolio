import React, { Component } from 'react';
import '../styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-wrapper' >
                <div className='logo-wrapper' onClick={_ => this.props.actionScroll('landing')}>
                    <div className='logo-container'></div>
                </div>
                <div className='name-wrapper'><span className='my-titles'></span></div>
                <div className='links-wrapper'>
                    <ul className='links-container'>
                        <li onClick={_ => this.props.actionScroll('webdev')}>Web Developer Projects</li>
                        <li onClick={_ => this.props.actionScroll('design')}>UI/UX Projects</li>
                        <li onClick={_ => this.props.actionScroll('skills')}>Skills</li>
                        <li onClick={_ => this.props.actionScroll('about')}>About Me/Contact</li>
                    </ul>
                </div>
            </div >
        )
    }
};