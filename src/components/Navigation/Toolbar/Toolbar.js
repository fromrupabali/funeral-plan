import React from 'react';

import './Toolbar.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import { Link } from 'react-router-dom';

const toolbar = (props) =>(
    <header className="Toolbar">
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <div className="Logo">
         <Link to="/"> 
            LOGO
        </Link>
        </div>

        <nav className="DekstopOnly">
            <NavigationItems auth={props.auth} signup={props.signup} clicked={props.clicked} />
        </nav>
    </header>
);

export default toolbar;