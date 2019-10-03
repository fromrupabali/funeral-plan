import React from 'react';

import  './NavigationItems.css';

import { Link } from 'react-router-dom';

  
const NavigationItems = (props) =>{

  return (
    <div className="toolbar">
     
        <div>
          <h1 style={{ color: "orangered" }}>LOGO</h1>
        </div>
        <nav className="navigation">
          <ul className="navigationItems">
            <li className="navigationItem">
              <a className="Link" href="#">
                Home
              </a>
            </li>
            <li className="navigationItem">
              <a className="Link" href="#">
                About Us
              </a>
            </li>
            <li className="navigationItem">
              <a className="Link" href="#">
                Our plans
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
   

  

export default NavigationItems;