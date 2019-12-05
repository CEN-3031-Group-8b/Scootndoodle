import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-scroll'

import './Navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg='light' expand='sm' className='nav-container'>
                <Navbar.Toggle area-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavLink className='d-inline p-2 text-black' to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                        <Link 
                            className='d-inline p-2 text-black'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-15}
                            duration= {500}
                        >About Us</Link>
                        <NavLink className='d-inline p-2 text-black' to='/create-product' style={{ textDecoration: 'none' }}>Buy</NavLink>
                        <Link 
                            className='d-inline p-2 text-black'
                            activeClass="active"
                            to="media"
                            spy={true}
                            smooth={true}
                            offset={-15}
                            duration= {500}
                        >Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}