import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function BotNav() {
  return (
    <nav className="botNav">
        <ul className="botNavList">
            <li className="botNavItem">
                <NavLink to='/customercare' className="botNavLink" activeClassName="botSelected" >
                Customer Care
                </NavLink>
            </li>
            <li className="botNavItem">
                <NavLink to='/information' className="botNavLink" activeClassName="botSelected">
                Information
                </NavLink>
            </li>
            <li className="botNavItem">
                <NavLink to='/payment' className="botNavLink" activeClassName="botSelected">
                 Payment
                </NavLink>
            </li>
            <li className="botNavItem">
                <NavLink to='/shipping' className="botNavLink" activeClassName="botSelected">
                Shipping
                </NavLink>
            </li>
            <li className="botNavItem">
                <NavLink to='/returnsandexchanges' className="botNavLink" activeClassName="botSelected">
                Returns and Exchanges
                </NavLink>
            </li>
            
        </ul>
    </nav>
  );
}

export default BotNav;