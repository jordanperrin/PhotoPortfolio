import React from 'react';
import {useState} from 'react';
import {SidebarData} from './SidebarData';
import { MdOutlineCropLandscape as Landscape, MdOutlineCropPortrait as Portarit} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    
    const [sidebar, setsidebar]= useState(false);

    const showSidebar = () =>{
        setsidebar(!sidebar);
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
                    {!sidebar ? (
                            <GiHamburgerMenu className='menu' onClick={showSidebar} />
                        ) : (
                            <IoMdClose className='x' onClick={showSidebar} />
                        )}
                </div>

                <div className='film-burn-nav'></div>

                <svg >
                    <filter id="wavy-nav">
                    <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="4" seed="2">
                        <animate attributeName="baseFrequency" dur="80s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="25" />
                    </filter>
                 </svg> 
            </nav>

            <nav className=  {sidebar ?  'side active': 'side'}>
                <ul className='side-items'>    
                    <li className='sidebar-toggle'>
                        <NavLink to="/bw" onClick={showSidebar} >
                            BW
                        </NavLink>
                    </li>
                    <li className='sidebar-toggle'>
                        <NavLink to='/color' onClick={showSidebar}  >
                            Color
                        </NavLink>
                    </li>
                </ul>     
            </nav>
        </>
    );
};

export default Navbar;