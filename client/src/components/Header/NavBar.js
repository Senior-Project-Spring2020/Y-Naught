import React, { Fragment, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar';
import logo from '../../assets/Y-Naught_BlckOutline.png';
import { getNum } from '../../actions/getCart';
// import NavLink from 'react-bootstrap/NavLink';

const NavBar = ({ auth: { isAuthenticated, loading,}, logout, getNum }) => {

    useEffect(() => {
        getNum();
    }, [])

    const authLinks = (
        <Nav className="mr-auto">
            <Nav.Link href="/createproduct">Create Product</Nav.Link>
            <Nav.Link onClick={logout} href="#!">Logout</Nav.Link>
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
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/lookbook">Lookbook</Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> 
                        <Nav.Link href="/register">Register</Nav.Link> */}
                        {/* <Nav.Link href="/createproduct">Create Product</Nav.Link> */}
                        {!loading && (<Fragment>{isAuthenticated ? authLinks : null}</Fragment>)}

                    </Nav>
                    <Nav.Link href="/cart">
                    <ion-icon name="cart-outline" size="large"></ion-icon><span>{getNum}</span>
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
    auth: state.auth,
    getNum: state.cartState
})

export default connect(mapStateToProps, { logout, getNum })(NavBar);
