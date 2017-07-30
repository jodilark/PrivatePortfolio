import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Content from '../components/portfolio/Portfolio';
// import NavAlt from '../components/NavAlt';
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className='page-contents'>
                {/* <div className='construction'>
                    <div>i'm an image</div>
                    under construction
                </div> */}
                <NavBar />                 
                <Content/>
                {/* <NavAlt />                  */}
            </div>
        )
    }
};
export default Home;