import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                {/* place Y-naught logo here as img */}
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                 <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Products'>Products</Link>
                <a className = "nav-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/tutorial/tutorial.html">About</a>
                <a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Lookbook</a>
            </div>

        </div>
    )
};

export default NavBar;
