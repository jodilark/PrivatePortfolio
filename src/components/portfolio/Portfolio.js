import React from 'react';
import LandingPage from '../landingPage/LandingPage'
import Skills from '../skills/Skills'
import About from '../about/About'
import Contact from '../contact/Contact'
import './portfolio.css'
import $ from 'jquery'

export default function Portfolio() {
    const projects = [
        {
            siteName: 'Charmi'
            , code: 'charmi'
            , link: 'http://charmi.surge.sh'
            , github: 'https://github.com/Team-Overkill/Charmi-React'
            , tech: ['React, ', 'Node, ', 'Express, ', 'SQL, ', 'Axios, ', 'Auth0, ', 'Socket.io, ', 'Redux']
            , role: 'Full Stack Developer with focus on back-end and data transfer.'
            , description: 'Developed with 3 other developers over the coarse of a week. Charmi is a dating app similar to tinder. Features include multiple-users, match making, and real-time chat.'
        },
        {
            siteName: 'All The Things'
            , code: 'att'
            , link: 'https://allthethngs.com'
            , github: 'https://github.com/jodilark/allthethings'
            , tech: ['Angular, ', 'Node, ', 'Express, ', 'SQL, ', 'Quokka Barcode, ', 'Auth0']
            , role: 'Full Stack Developer'
            , description: 'An app that allows you to keep a record of all the items you own and where they are stored.'
        },
        {
            siteName: 'Final Fantasy XIV Shopping List'
            , code: 'ffxivsl'
            , link: 'http://cute-route.surge.sh/#!/'
            , github: 'https://github.com/jodilark/noServerProject'
            , tech: ['Angular, ', 'Node']
            , role: 'Front-End Developer'
            , description: 'Add-on application for a video game that allows you to easily search for in-game content.'
        },
        {
            siteName: '3PL Central Warehouse Management System'
            , code: 'tpl'
            , link: 'http://2h9nk7.axshare.com/#g=1&p=receiptsfeature&c=1'
            , github: 'Private'
            , tech: ['Axure, ', 'Photoshop']
            , role: 'UX/UI Design'
            , description: 'Total Redesign of a 2008 based warehouse management software. (Prototype only due to company access restrictions)'
        }
    ]
    return (
        <div className='portfolio-wrapper'>
            <LandingPage />
            <div className='type-container webdev'>
                <div className='role-title-text'>
                    <div className='title-text'>Web Developer Projects</div>
                </div>
                <div className='projects-wrapper'>
                    <div className='multi-wrapper'>
                        <div className='project'>
                            <div className='project-title'>Charmi</div>
                            <div className='project-info' id='charmi-info'>
                                <div className='project-info-text'>
                                    <ul>
                                        <li><span className='info-header'>{projects[0].siteName}</span></li>
                                        <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[0].github} target='blank'>{projects[0].github}</a></span></li>
                                        <li><span className='info-header'>Tech:</span> <span>{projects[0].tech}</span></li>
                                        <li><span className='info-header'>Role:</span> <span>{projects[0].role}</span></li>
                                        <li><span className='info-header'>Description:</span> <span>{projects[0].description}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mobile'>
                                <div id='charmi'></div>
                            </div>
                            <div className='framework'>React</div>
                        </div>
                        <div className='project'>
                            <div className='project-title'>All the things</div>
                            <div id='att'></div>
                            <div className='framework'>Angular</div>
                        </div>
                        <div className='project'>
                            <div className='project-title'>FFXIV shopping list</div>
                            <div className='mobile'>
                                <div id='ffxiv'></div>
                            </div>
                            <div className='framework'>Angular</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='type-container design'>
                <div className='role-title-text'>
                    <div className='title-text'>UX/UI Projects</div>
                </div>
                <div className='projects-wrapper'>
                    <div className='project'>
                        <div className='project-title'>3PL Central WMS</div>
                        <div id='tpl'></div>
                        <div className='framework'>Axure RP</div>
                    </div>
                </div>
            </div>
            <Skills />
            <About />
            <Contact />
        </div>
    )
}