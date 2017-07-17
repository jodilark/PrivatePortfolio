import React, { Component } from 'react';
import '../styles/NavAlt.css';
import Portfolio from './portfolio/Portfolio'
import Contact from  './contact/Contact'

class NavAlt extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactVisible: false
        }
    }

    showContact(props) {
        this.setState({
            contactVisible: !this.state.contactVisible
        })
        // console.log(this.state.contactVisible)
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
                <div className='left sideNav' style={{ transform: "rotate(90deg) translate(0px, -90px)" }}>About</div>
                <div className='right sideNav' style={{ transform: "rotate(-90deg) translate(0px, -90px)" }} onClick={() => this.showContact()}>Contact</div>
                {
                    this.state.contactVisible
                        ? <Contact />
                        : null
                }
            </div>
        )
    }
};

export default NavAlt