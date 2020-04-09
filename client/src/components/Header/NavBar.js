import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar';
import logo from '../../assets/Y-Naught_BlckOutline.png';
import createProduct from '../CreateProduct/createProduct';
// import NavLink from 'react-bootstrap/NavLink';

const NavBar = ({ auth: { isAuthenticated, loading, admin }, logout }) => {
    const authLinks = (
        <Nav className="mr-auto">
            <Nav.Link onClick={logout} href="#!">Logout</Nav.Link>
        </Nav>
    );

    const guestLinks = (
        <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
    );

    const createLink = (
        <Nav className="mr-auto">
            <Nav.Link href="/createproduct" onSelect={createProduct}>Create Product</Nav.Link>
        </Nav>
    );

    return (
        <div className="header">
            <Container className="navbar-head">
                <Navbar className="navbar navbar-custom">
                    <a href="/home" className="navbar-left">
                        <img src={logo} alt="logo" width="60" height="60" className="logo"></img>
                    </a>
                    <Navbar.Brand className="brandName" href="/home">Y-Naught</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/lookbook">Lookbook</Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> 
                        <Nav.Link href="/register">Register</Nav.Link> */}
                        {/* <Nav.Link href="/createproduct">Create Product</Nav.Link> */}
                        {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                        {!loading && (<Fragment>{admin ? createLink : null }</Fragment>)}
                        
                    </Nav>
                    <Nav.Link href="/cart">
                        <ion-icon name="cart-outline" size="large"></ion-icon>
                    </Nav.Link>
                </Navbar>
            </Container>
        </div>
    )
};

NavBar.propTyppes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavBar);
