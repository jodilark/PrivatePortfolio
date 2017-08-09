import React, { Component } from 'react';
import ReactDom from 'react'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
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

configureAnchors({ offset: -70, scrollDuration: 5000 })

class Home extends Component {
    constructor(props) {
        super(props)

        this.scroll = this.scroll.bind(this)
        this.hoverInfo = this.hoverInfo.bind(this)
    }

    componentWillMount() {

    }

    scroll(id) {
        goToAnchor(id)
        console.log(`got here`)
    }

    hoverInfo(project) {
        console.log(`hovered`)
        $(`#${project}`).show()
    }
 
    hoverInfoHide() {
        console.log(`hidded`)
        $(`#charmi-info`).hide()
    }

    render() {
        return (
            <div className='page-contents'>
                <NavBar actionScroll={this.scroll} />
                <div className='main-body'>
                    <div id='landing'>
                        <LandingPage /></div>
                    <Content actionHoverInfo={this.hoverInfo} actionHoverInfoHide={this.hoverInfoHide} />
                    <div id='skills'>
                        <Skills /></div>
                    <div id='about'>
                        <About /></div>
                    <Contact />
                </div>
            </div>
        )
    }
};
export default Home;