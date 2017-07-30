import React, { Component } from 'react';
import '../styles/NavAlt.css';
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import About from './about/About'

class NavAlt extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactVisible: false
            , aboutVisible: false
        }
    }

    showContact(props) {
        if (this.state.aboutVisible === true) {
            this.setState({
                contactVisible: !this.state.contactVisible
                , aboutVisible: false
            })
        }
        else {
            this.setState({
                contactVisible: !this.state.contactVisible
            })
        }
    }

    showAbout(props) {
        if (this.state.contactVisible === true) {
            this.setState({
                aboutVisible: !this.state.aboutVisible
                , contactVisible: false
            })
        }
        else {
            this.setState({
                aboutVisible: !this.state.aboutVisible
            })
        }
    }


    render() {
        return (
            <div className='nav-wrapper'>
                <div className='main-container'>
                    <div className='media-container'>
                        <Portfolio />
                    </div>
                </div>
                <div className='top'>Jodi Parker | UX/UI Designer | Web Developer</div>
                <div className='left sideNav' style={{ transform: "rotate(90deg) translate(0px, -90px)" }} onClick={() => this.showAbout()}>About</div>
                <div className='right sideNav' style={{ transform: "rotate(-90deg) translate(0px, -90px)" }} onClick={() => this.showContact()}>Contact</div>
                {
                    this.state.contactVisible
                        ? <Contact />
                        : null
                }
                {
                    this.state.aboutVisible
                        ? <About />
                        : null
                }
            </div>
        )
    }
};

export default NavAlt