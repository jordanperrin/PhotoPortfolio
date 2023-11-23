import React from 'react';
import {useState} from 'react';
import {SidebarData} from './SidebarData';
import { MdOutlineCropLandscape as Landscape, MdOutlineCropPortrait as Portarit} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    
    const [dropDown, setdropDown]= useState(false);

    const showDropDown = () =>{
        setdropDown(!dropDown);
    }

    //.active class in css will e applied to any active link using NavLink tag
    return (
        <>
            <nav className='nav'>
                <Link to="/" className="title"> JP</Link>
                
                <ul>
                    <li>
                        <Link to="/vert">
                            <Landscape className='orienatation-icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/horiz">
                            <Portarit className='orienatation-icon'/>
                        </Link>
                    </li>
                </ul>
                
                <div className='menu-container' >
                    {!dropDown ? (
                            <GiHamburgerMenu className='menu' onClick={showDropDown} />
                        ) : (
                            <IoMdClose className='x' onClick={showDropDown} />
                        )}
                </div>

                <div className=  {dropDown ?  'side active': 'side'}>
                    <ul className='side-items'>    
                        <li className='dropDown-toggle'>
                            <Link to="/bw" className='drop-item' onClick={showDropDown} >
                                BW
                            </Link>
                        </li>
                        <li className='dropDown-toggle'>
                            <Link to='/color' className='drop-item' onClick={showDropDown}  >
                                Color
                            </Link>
                        </li>
                    </ul>     
                </div>

                <div className={dropDown ? 'film-burn-nav show' : "film-burn-nav"}></div>

                <svg >
                    <filter id="wavy-nav">
                    <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2">
                        <animate attributeName="baseFrequency" dur="80s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="25" />
                    </filter>
                 </svg> 
            </nav>

           
        </>
    );
};

export default Navbar;