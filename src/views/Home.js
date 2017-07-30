import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Content from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import '../styles/Home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactVisible: false
            , aboutVisible: false
        }
        this.showContact = this.showContact.bind(this)
        this.showAbout = this.showAbout.bind(this)
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
            <div className='page-contents'>
                <NavBar actionShowAbout={this.showAbout} actionShowContact={this.showContact}/>
                <Content />
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
export default Home;