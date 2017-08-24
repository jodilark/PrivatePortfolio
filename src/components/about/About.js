import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className='about-wrapper'>
                <div className='the-about-container'>
                    <div className='aboutType'>
                        <div className='title-text'>About Me</div>
                    </div>
                    <div className='profile'>
                        <div className='profile-picture-container' id='me-picture'></div>
                        <div className='text-container'>
                            <p className='about-text'>
                                Technology has always fascinated me because I love learning how things work. When I was young, I would take apart electronics just to see what was inside. I learned how to code from <span className='link' ><a href="https://devmountain.com/" target="_blank"><span className='highlight-link'>DevMountain</span></a></span> (a local institution that teaches web development) where I learned Javascript, Angular, React, Node, Express, SQL, HTML/CSS, and JQuery <br /><br /> I also attended Utah Valley University when it was going through growing pains. I started with UVCC, on through UVSC and eventually to UVU. My focus was on all things design. Publishing, Graphics, 3d animations, Audio, Video, Game, and Web design are some of the courses I completed. <br /><br /> I have been in software for 7 years. Some of the roles I have filled are: Quality Assurance, Associate Producer, Game Designer, Graphic Artist, IT specialist, Dev Ops, UX/UI Designer, and now Web Developer. <br /><br /> If you like my pieces, or just want to know more, feel free to drop me a line at <span className='link' ><a href="mailto:jodilparker@gmail.com?Subject=I like your portfolio and want to know more" target="_blank"><span className='highlight-link'>jodilparker@gmail.com</span></a></span>. Until then, at least you know a little more about me, and knowing is half the battle... Go Joe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}