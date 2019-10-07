import React from 'react';

import './Footer.css';
import { Link } from 'react-router-dom';


const footer = () => (
  <div className="Footer">
    <div className="Footer1">
      <h1 className="FooterLogo">Strastone&Bently</h1>
    </div>
    <div className="Footer2">
      <div className="Footer2Child">
        <h4>Our plans</h4>
        <ul>
          <li>
            <Link to="/plan-details/basic">Basic plan</Link>
          </li>
          <li>
            <Link to="/plan-details/standard">Standard plan</Link>
          </li>
          <li>
            <Link to="/plan-details/perl">Perl plan</Link>
          </li>
          <li>
            <Link to="/plan-details/diamond">Diamond plan</Link>
          </li>
        </ul>
      </div>
      <div className="Footer2Child">
        <h4>Contact us</h4>
        <ul>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </div>
      <div className="Footer2Child">
        <h4>Follow</h4>
        <ul>
          <li>
            <Link to="/plan-details/basic">Facebook</Link>
          </li>
          <li>
            <Link to="/plan-details/basic">Twitter</Link>
          </li>
          <li>
            <Link to="/plan-details/basic">Intragram</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default footer;