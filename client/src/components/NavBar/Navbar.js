import React from 'react';
import {useState} from 'react';
import {SidebarData} from './SidebarData';
import { MdOutlineCropLandscape } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {Link, NavLink} from 'react-router-dom'
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
                        <NavLink to="#">
                            Vert
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Horiz</NavLink>
                    </li>
                </ul>
                
                <div className='menu-container' >
                    {!sidebar ? (
                            <GiHamburgerMenu className='menu' onClick={showSidebar} />
                        ) : (
                            <IoMdClose className='x' onClick={showSidebar} />
                        )}
                </div>
            </nav>

            <nav className=  {sidebar ?  'side active': 'side'}>
                <ul className='side-items'>    
                    <li className='sidebar-toggle'>
                        <NavLink to="#">
                            BW
                        </NavLink>
                    </li>
                    <li className='sidebar-toggle'>
                        <NavLink to='#'>
                            Color
                        </NavLink>
                    </li>
                </ul>     
            </nav>
        </>
    );
};

export default Navbar;