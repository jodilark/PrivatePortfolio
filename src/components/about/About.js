import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about-wrapper'>
            <div className='about-container'>
                <p>About</p>
                <div className='profile'>
                    <div className='profile-container'>
                        <div className='picture-container'>
                            <div className='picture' id='me-picture'></div>
                        </div>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem provident ipsum dolores rerum expedita, atque eligendi dolorum laborum temporibus a vel quibusdam consectetur porro alias, nesciunt veniam repellendus, labore ab.</div>
                    </div>
                    <div className='profile-container'>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nostrum ipsam perferendis quae, omnis asperiores commodi aspernatur, sequi, pariatur error voluptatem cumque inventore voluptatibus similique? Exercitationem, ea tempore. Praesentium, est?</div>
                        <div className='picture' id='like-picture'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}