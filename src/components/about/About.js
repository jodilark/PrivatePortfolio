import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className='about-wrapper'>
                <div className='about-container'>
                    <p className='about-container-text'>About</p>
                    <div className='profile'>
                        <div className='profile-container'>
                            <div className='picture-container'>
                                <div className='picture' id='me-picture'></div>
                            </div>
                            <div className='text-container'><p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem provident ipsum dolores rerum expedita, atque eligendi dolorum laborum temporibus a vel quibusdam consectetur porro alias, nesciunt veniam repellendus, labore ab.</p></div>
                        </div>
                    </div>
                </div>
                <div className='closingX' onClick={_ => this.props.actionShowAbout()}>X</div>
            </div>
        )
    }
}