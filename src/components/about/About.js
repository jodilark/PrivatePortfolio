import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className='about-wrapper'>
                <div className='title-container'>
                    <p className='title-container-text'>About</p>
                </div>
                <div className='profile'>
                    <div className='profile-container'>
                        <div className='picture-container'>
                            <div className='picture' id='me-picture'></div>
                        </div>
                        <div className='text-container'>
                            <p className='about-text'>
                                Technology has always fascinated me because I love learning how things work. When I was young, I would take apart electronics just to see what was inside. As an adult, I enjoy all the sciences and love to learn about new techniques, inventions, and other discoveries. <br/><br/> I also grew up in the 80's and love the pop culture surrounding that era. Want to talk the things that "belong in a museum", or hunt for One-Eyed Willy's treasure, it's on like Red Dawn. <br/><br/> I attended Utah Valley University when it was going through growing pains. I started with UVCC, on through UVSC and eventually to UVU. My focus was on all things design. Publishing, Graphics, 3d animations, Audio, Video, Game, and Web design are some of the courses I completed. <br/><br/> I have been in software for 7 years. Some of the roles I have filled are: Quality Assurance, Associate Producer, Game Designer, Graphic Artist, IT specialist, Dev Ops, UX/UI Designer, and now Web Developer. <br/><br/> If you like my pieces, or just want to know more, feel free to drop me a line at <span className='link' ><a href="mailto:jodilparker@gmail.com?Subject=I like your portfolio and want to know more" target="_blank">jodilparker@gmail.com</a></span>. Until then, at least you know a little more about me, and knowing is half the battle... Go Joe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='closingX' onClick={_ => this.props.actionShowAbout()}>X</div>
            </div>
        )
    }
}