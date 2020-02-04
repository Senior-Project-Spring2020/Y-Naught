import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar'
import logo from './Y-Naught_BlckOutline.png'
// import NavLink from 'react-bootstrap/NavLink';

const NavBar = () => {
    return (
        <div className = "header">
            <Container className="navbar-head">
                <Navbar className= "navbar navbar-custom">
                    <a href="/home" className="navbar-left">    
                        <img src={logo} alt="logo" width="60" height="60" className="logo"></img>
                    </a>
                    <Navbar.Brand className="brandName" href="/home">Y-Naught</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/lookbook">Lookbook</Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> */}
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
};

export default NavBar;
