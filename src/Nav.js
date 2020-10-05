import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/shop' activeClassName="selected" >
                Shop
                </NavLink>
            </li>
            <li>
                <NavLink to='/lookbook' activeClassName="selected">
                LookBook
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' activeClassName="selected">
                About Us
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName="selected">
                Contact Us
                </NavLink>
            </li>
            
        </ul>
    </nav>
  );
}

export default Nav;