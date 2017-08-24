import React, { Component } from 'react';
import ReactDom from 'react'
import ScrollableAnchor, { configureAnchors, goToAnchor } from 'react-scrollable-anchor'
import NavBar from '../components/NavBar';
import Content from '../components/portfolio/Portfolio';
import '../styles/Home.css'
import TweenLite from 'gsap'
import scrollTo from '../../node_modules/gsap/ScrollToPlugin'
import $ from 'jquery'
import LandingPage from '../components/landingPage/LandingPage'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'



class Home extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        configureAnchors({ offset: -70, scrollDuration: 5000 })
    }

    scroll(id) {
        goToAnchor(id)
        $('.hamburger-container').hide()
        // console.log(`got here`)
    }

    render() {
        return (
            <div className='page-contents'>
                <NavBar actionScroll={this.scroll} />
                <div className='main-body'>
                    <div id='landing'>
                        <LandingPage /></div>
                    <Content />
                    <div id='skills'>
                        <Skills /></div>
                    <div id='about'>
                        <About /></div>
                    <div id='contact'>
                    <Contact /></div>
                </div>
            </div>
        )
    }
};
export default Home;