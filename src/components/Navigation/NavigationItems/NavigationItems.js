import React from 'react';

import { Link } from 'react-router-dom';

import  './NavigationItems.css';
  
const NavigationItems = (props) =>{

  return (
    <div className="toolbar">
      <div>
       <Link className="Logo" to="/" >Strastone&Bently</Link>
      </div>
      <nav className="navigation">
        <ul className="navigationItems">
          <li className="navigationItem">
            <a className="Link" href="/">
              Home
            </a>
          </li>
          <li className="navigationItem">
            <a className="Link" href="/about-us">
              About Us
            </a>
          </li>
          <li className="navigationItem">
            <div className="dropdown">
              <button className="dropbtn">Our plans</button>
              <div className="dropdown-content">
                <Link to="/plan-details/basic">Basic plan</Link>
                <Link to="/plan-details/standard">Standard plan</Link>
                <Link to="/plan-details/perl">Perl plan</Link>
                <Link to="/plan-details/diamond">Diamond plan</Link>
                <Link to="/compare-plan">Compare our plans</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
   

  

export default NavigationItems;