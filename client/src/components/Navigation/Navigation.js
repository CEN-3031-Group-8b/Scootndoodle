import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import './Navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand='sm' className='nav-container'>
                <Navbar.Toggle area-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavLink className='d-inline p-2 text-white' to={'/'} style={{ textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='d-inline p-2 text-white' to={'/#about-us'} style={{ textDecoration: 'none' }}>About Us</NavLink>
                        <NavLink className='d-inline p-2 text-white' to={'/ShopPreview'} style={{ textDecoration: 'none' }}>Buy</NavLink>
                        <NavLink className='d-inline p-2 text-white' to={'/#contact-us'} style={{ textDecoration: 'none' }}>Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
