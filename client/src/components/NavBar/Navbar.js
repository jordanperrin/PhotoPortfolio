import React from 'react';
import './Navbar.css';

const Navbar = () =>{

    return (
        <nav className="nav">
            <a href="/" className="site-title"> JP</a>
            <ul>
                <li>
                    <a href="/BW">BW</a>
                </li>
                <li>
                    <a href="/Color">Color</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;