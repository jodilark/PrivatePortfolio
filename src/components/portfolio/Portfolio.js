import React from 'react';
import './portfolio.css'

export default function Portfolio() {
    const projects = [
        {
            siteName: 'All The Things'
            , link: 'https://allthethngs.com'
            , tech: ['Angular, ', 'Node, ', 'Express, ', 'SQL, ', 'Quokka Barcode, ', 'Auth0']
            , role: 'Full Stack Developer'
            , description: 'An app that allows you to keep a record of all the items you own and where they are stored.'
        },
        {
            siteName: 'Final Fantasy XIV Shopping List'
            , link: 'http://cute-route.surge.sh/#!/'
            , tech: ['Angular, ', 'Node']
            , role: 'Front-End Developer'
            , description: 'Add-on application for a video game that allows you to easily search for in-game content'
        },
        {
            siteName: '3PL Central Warehouse Management System'
            , link: 'http://2h9nk7.axshare.com/#g=1&p=receiptsfeature&c=1'
            , tech: ['Axure, ', 'Photoshop']
            , role: 'UX/UI Design'
            , description: 'Total Redesign of a 2008 based warehouse management software. (Prototype only due to company access restrictions)'
        }
    ]
    return (
        <div className='portfolio-wrapper'>
            <div className='port-piece-container' id='project-1'></div>
            <div className='port-info'>
                <ul>
                    <li>{projects[0].siteName} | <a href={projects[0].link} target='_blank'>{projects[0].link}</a></li>
                    <li>Tech | <span>{projects[0].tech}</span></li>
                    <li>Role | <span>{projects[0].role}</span></li>
                    <li>Description | <span>{projects[0].description}</span></li>
                </ul>
            </div>
            <div className='project2-container'>
                <div className='port-piece-container' id='project-2'></div>
                <div className='port-info' id='info-2'>
                    <ul>
                        <li>{projects[1].siteName} | <a href={projects[1].link} target='_blank'>{projects[1].link}</a></li>
                        <li>Tech | <span>{projects[1].tech}</span></li>
                        <li>Role | <span>{projects[1].role}</span></li>
                        <li>Description | <span>{projects[1].description}</span></li>
                    </ul>
                </div>
            </div>
            <div className='port-piece-container' id='project-3'></div>
            <div className='port-info' id='info-3'>
                <ul>
                    <li>{projects[2].siteName} | <a href={projects[2].link} target='_blank'>{projects[2].link}</a></li>
                    <li>Tech | <span>{projects[2].tech}</span></li>
                    <li>Role | <span>{projects[2].role}</span></li>
                    <li>Description | <span>{projects[2].description}</span></li>
                </ul>
            </div>
        </div>
    )
}