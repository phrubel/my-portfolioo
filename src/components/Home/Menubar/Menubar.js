import React from 'react';
import './Menubar.css'
import logo from '../../../image/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <Navbar className='nav' variant="dark" expand="lg">
                <Navbar.Brand href="/home">
                <img style={{ height: '70px' }} className='img-fluid ml-5' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" mb-2 mr-5 ml-auto">
                        <Link className="menu-bar" to="/home">Home</Link>
                        <Link className="menu-bar" to="/about">About</Link>
                        <Link className="menu-bar" to="/project">projects</Link>
                        <Link className="menu-bar" to="/skill">Skill</Link>
                        <Link className="menu-bar" to="/blog">Blog</Link>
                        <Link className="menu-bar" to="/contact">Contact Us</Link>
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;