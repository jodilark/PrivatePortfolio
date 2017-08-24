import React, { Component } from 'react';
import './skills.css'
import { Transition } from 'semantic-ui-react'
import '../../../node_modules/semantic-ui-css/semantic.min.css'

export default function Skills() {
    return (
        <div className='skills-wrapper'>
            <div className='the-skills-container'>
                <div className='the-role-title-text' id='skillset'>
                    <div className='title-text'>Skills</div>
                </div>
                <div className='skills-content-wrapper'>
                    <div className='skill-list-wrapper'>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Angular</div>
                            <div className='skill'>
                                <div id='angular'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>React</div>
                            <div className='skill'>
                                <div id='react'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Javascript</div>
                            <div className='skill'>
                                <div id='js'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>jQuery</div>
                            <div className='skill'>
                                <div id='jQuery'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Node</div>
                            <div className='skill'>
                                <div id='node'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Express</div>
                            <div className='skill'>
                                <div id='exp'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>RESTful</div>
                            <div className='skill'>
                                <div id='rest'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>SQL</div>
                            <div className='skill'>
                                <div id='sql'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>HTML5</div>
                            <div className='skill'>
                                <div id='html'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>CSS3</div>
                            <div className='skill'>
                                <div id='css'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Sass</div>
                            <div className='skill'>
                                <div id='sass'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Gulp</div>
                            <div className='skill'>
                                <div id='gulp'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Photoshop</div>
                            <div className='skill'>
                                <div id='ps'></div>
                            </div>
                        </div>
                        <div className='skill-and-text'>
                            <div className='skill-text'>Axure RP</div>
                            <div className='skill'>
                                <div id='axure'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}