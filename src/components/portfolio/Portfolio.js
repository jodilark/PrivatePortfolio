import React from 'react';
import './portfolio.css'

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
            <div className='portfolio-container'>
                <div className='web-dev'>
                    <p className='role-title-text'>Web Developer Projects</p>
                    <div className='mobile-container'>
                        <a href={projects[0].github} target='_blank' id={projects[0].code}></a>
                        <div className='port-info'>
                            <ul>
                                <li><span className='info-header'>{projects[0].siteName}</span> |</li>
                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[0].github} target='blank'>{projects[0].github}</a></span></li>
                                <li><span className='info-header'>Tech:</span> <span>{projects[0].tech}</span></li>
                                <li><span className='info-header'>Role:</span> <span>{projects[0].role}</span></li>
                                <li><span className='info-header'>Description:</span> <span>{projects[0].description}</span></li>
                            </ul>
                        </div>
                    </div>
                    <a href={projects[1].link} target='_blank' className='port-piece-container' id={projects[1].code}>
                        <div className='port-info'>
                            <ul>
                                <li><span className='info-header'>{projects[1].siteName}</span> | <span className='link'><a href={projects[1].link} target='_blank'>{projects[1].link}</a></span></li>
                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[1].github} target='blank'>{projects[1].github}</a></span></li>
                                <li><span className='info-header'>Tech:</span> <span>{projects[1].tech}</span></li>
                                <li><span className='info-header'>Role:</span> <span>{projects[1].role}</span></li>
                                <li><span className='info-header'>Description:</span> <span>{projects[1].description}</span></li>
                            </ul>
                        </div>
                    </a>
                    <div className='mobile-container'>
                        <a href={projects[2].link} target='_blank' id={projects[2].code}></a>
                        <div className='port-info'>
                            <ul>
                                <li><span className='info-header'>{projects[2].siteName}</span> | <span className='link'><a href={projects[2].link} target='_blank'>{projects[2].link}</a></span></li>
                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[2].github} target='blank'>{projects[2].github}</a></span></li>
                                <li><span className='info-header'>Tech:</span> <span>{projects[2].tech}</span></li>
                                <li><span className='info-header'>Role:</span> <span>{projects[2].role}</span></li>
                                <li><span className='info-header'>Description:</span> <span>{projects[2].description}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='ux-ui'>
                    <p className='role-title-text'>UX/UI Designer Projects</p>
                    <a href={projects[3].link} target='_blank' className='port-piece-container' id={projects[3].code}>
                        <div className='port-info'>
                            <ul>
                                <li><span className='info-header'>{projects[3].siteName}</span> | <span className='link'><a href={projects[3].link} target='_blank'>{projects[3].link}</a></span></li>
                                <li><span className='info-header'>Tech:</span> <span>{projects[3].tech}</span></li>
                                <li><span className='info-header'>Role:</span> <span>{projects[3].role}</span></li>
                                <li><span className='info-header'>Description:</span> <span>{projects[3].description}</span></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}