import React from 'react'
import './Navbar.css'

export default function navbar() {
    return (
        <div id='nav' >
            <navbar id="navbar">
                <div id='portfolio'>
                    <p className='my-portfolio'>My portfolio</p>
                </div>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Services</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </navbar>
        </div>
    )
}
