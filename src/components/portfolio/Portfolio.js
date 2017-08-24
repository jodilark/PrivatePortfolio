import React, { Component } from 'react';
import './portfolio.css'
import $ from 'jquery'
import { Transition } from 'semantic-ui-react'
import '../../../node_modules/semantic-ui-css/semantic.min.css'
import projectList from './projects'

export default class Portfolio extends Component {
    state = { charmiVisible: false, attVisible: false, ffxivVisible: false, tplVisible: false }

    toggleCharmi = _ => this.setState({ charmiVisible: !this.state.charmiVisible })
    toggleAtt = _ => this.setState({ attVisible: !this.state.attVisible })
    toggleFfxiv = _ => this.setState({ ffxivVisible: !this.state.ffxivVisible })
    toggleTpl = _ => this.setState({ tplVisible: !this.state.tplVisible })
    render() {
        const projects = projectList.projectList
        return (
            <div className='portfolio-wrapper' id='webdev'>
                <div className='type-container webdev'>
                    <div className='role-title-text' id='multi'>
                        <div className='title-text'>Web Developer Projects</div>
                    </div>
                    <div className='projects-wrapper'>
                        <div className='multi-wrapper'>
                            <div className='project' onMouseEnter={this.toggleCharmi} onMouseLeave={this.toggleCharmi}>
                                <div className='project-title'>Charmi</div>
                                <Transition visible={this.state.charmiVisible} animation='slide up' duration={500}>
                                    <div className='project-info' id='charmi-info'>
                                        <div className='project-info-text'>
                                            <ul>
                                                <li><span className='info-header'>{projects[0].siteName}:</span> <span className='link'><a href={projects[0].link} target='blank'>{projects[0].link}</a></span></li>
                                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[0].github} target='blank'>{projects[0].github}</a></span></li>
                                                <li><span className='info-header'>Tech:</span> <span>{projects[0].tech}</span></li>
                                                <li><span className='info-header'>Role:</span> <span>{projects[0].role}</span></li>
                                                <li><span className='info-header'>Description:</span> <span>{projects[0].description}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                                <div className='mobile'>
                                    <div id='charmi'></div>
                                </div>
                                <div className='framework'>React</div>
                            </div>
                            <div className='project' onMouseEnter={this.toggleAtt} onMouseLeave={this.toggleAtt}>
                                <div className='project-title'>All the things</div>
                                <Transition visible={this.state.attVisible} animation='slide up' duration={500}>
                                    <div className='project-info' id='att-info'>
                                        <div className='project-info-text'>
                                            <ul>
                                                <li><span className='info-header'>{projects[1].siteName}:</span> <span className='link'><a href={projects[1].link} target='blank'>{projects[1].link}</a></span></li>
                                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[1].github} target='blank'>{projects[1].github}</a></span></li>
                                                <li><span className='info-header'>Tech:</span> <span>{projects[1].tech}</span></li>
                                                <li><span className='info-header'>Role:</span> <span>{projects[1].role}</span></li>
                                                <li><span className='info-header'>Description:</span> <span>{projects[1].description}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                                <div className='desktop'>
                                    <div id='att'></div>
                                </div>
                                <div className='framework'>Angular</div>
                            </div>
                            <div className='project' onMouseEnter={this.toggleFfxiv} onMouseLeave={this.toggleFfxiv}>
                                <div className='project-title'>FFXIV shopping list</div>
                                <Transition visible={this.state.ffxivVisible} animation='slide up' duration={500}>
                                    <div className='project-info' id='ffxiv-info'>
                                        <div className='project-info-text'>
                                            <ul>
                                                <li><span className='info-header'>{projects[2].siteName}:</span> <span className='link'><a href={projects[2].link} target='blank'>{projects[2].link}</a></span></li>
                                                <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[2].github} target='blank'>{projects[2].github}</a></span></li>
                                                <li><span className='info-header'>Tech:</span> <span>{projects[2].tech}</span></li>
                                                <li><span className='info-header'>Role:</span> <span>{projects[2].role}</span></li>
                                                <li><span className='info-header'>Description:</span> <span>{projects[2].description}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                                <div className='mobile'>
                                    <div id='ffxiv'></div>
                                </div>
                                <div className='framework'>Angular</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='type-container design' id='design'>
                    <div className='role-title-text'>
                        <div className='title-text'>UX/UI Projects</div>
                    </div>
                    <div className='projects-wrapper'>
                        <div className='single-project' onMouseEnter={this.toggleTpl} onMouseLeave={this.toggleTpl}>
                            <div className='project-title'>3PL Central WMS</div>
                            <Transition visible={this.state.tplVisible} animation='slide up' duration={500}>
                                <div className='project-info' id='tpl-info'>
                                    <div className='project-info-text'>
                                        <ul>
                                            <li><span className='info-header'>{projects[3].siteName}:</span> <span className='link'><a href={projects[3].link} target='blank'>{projects[3].link}</a></span></li>
                                            {/* <li><span className='info-header'>Github:</span> <span className='link'><a href={projects[3].github} target='blank'>{projects[3].github}</a></span></li> */}
                                            <li><span className='info-header'>Tech:</span> <span>{projects[3].tech}</span></li>
                                            <li><span className='info-header'>Role:</span> <span>{projects[3].role}</span></li>
                                            <li><span className='info-header'>Description:</span> <span>{projects[3].description}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </Transition>
                            <div className='singleton'>
                                <div id='tpl'></div>
                            </div>
                            <div className='framework'>Axure RP</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}