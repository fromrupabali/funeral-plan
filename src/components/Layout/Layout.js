import React from 'react';

import Navigation from '../../components/Navigation/NavigationItems/NavigationItems';
import './Layout.css';
const layout = props => (
  <div>
    <div className="navbar">
      <Navigation />
    </div>
    <main>{props.children}</main>
  </div>
);

export default  layout;