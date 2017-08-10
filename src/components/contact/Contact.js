import React, { Component } from 'react'
import './contact.css'
import { Transition } from 'semantic-ui-react'
import '../../../node_modules/semantic-ui-css/semantic.min.css'

export default class Contact extends Component {
    state = {
        email: false
        , phone: false
        , linked: false
        , git: false
    }

    toggleEmail = _ => this.setState({ email: !this.state.email })
    togglePhone = _ => this.setState({ phone: !this.state.phone })
    toggleLinked = _ => this.setState({ linked: !this.state.linked })
    toggleGit = _ => this.setState({ git: !this.state.git })

    render() {
        return (
            <div className='contact-wrapper'>
                <div className='contact-info-wrapper'>
                    <a className='one'
                        href="mailto:jodilparker@gmail.com?Subject=I like your portfolio and want to know more"
                        target="_blank"
                        onMouseEnter={this.toggleEmail}
                        onMouseLeave={this.toggleEmail}
                    >
                        <Transition visible={this.state.email} animation='fade left' duration={500}>
                            <span className='link' id='email-link'><div className='contact-text'>jodilparker@gmail.com</div></span>
                        </Transition>
                        <div className='social fa fa-envelope-square'></div>
                    </a>
                    <div className='two'
                        onMouseEnter={this.togglePhone}
                        onMouseLeave={this.togglePhone}
                    >
                        <div className='social fa fa-phone-square'></div>
                        <Transition visible={this.state.phone} animation='fade right' duration={500}>
                            <div className='contact-text'>801-949-6842</div>
                        </Transition>
                    </div>
                </div>
                <div className='contact-info-wrapper'>
                    <a className='one'
                        href='https://www.linkedin.com/in/jodiparker'
                        target='_blank'
                        onMouseEnter={this.toggleLinked}
                        onMouseLeave={this.toggleLinked}
                    >
                        <Transition visible={this.state.linked} animation='fade left' duration={500}>
                            <span className='link' id='linkedIn-link'><div className='contact-text'>https://www.linkedin.com/in/jodiparker</div></span>
                        </Transition>
                        <div className='social fa fa-linkedin-square'></div>
                    </a>
                    <a className='two'
                        href='https://github.com/jodilark'
                        target='_blank'
                        onMouseEnter={this.toggleGit}
                        onMouseLeave={this.toggleGit}
                    >
                        <div className='social fa fa-github-square'></div>
                        <Transition visible={this.state.git} animation='fade right' duration={500}>
                            <span className='link' id='github-link'><div className='contact-text'>https://github.com/jodilark</div></span>
                        </Transition>
                    </a>
                </div>
                <svg height="124" width="500">
                    <line x1="50%" y1="0" x2="50%" y2="200" className="line" />
                    <line x1="0" y1="50%" x2="500" y2="50%" className="line" />
                </svg>
            </div>
        )
    }
}