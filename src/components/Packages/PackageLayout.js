import React from "react";

import { Link } from "react-router-dom";
import './PackageLayout.css';

const layout = props => (
  <div>
    <div className="IntroText">
      <h1>Compare Funeral Plans</h1>
      <p>
        Everyone has different needs – and we provide a range of funeral plans
        designed to meet your requirements at a price you can afford.
      </p>
    </div>
    <div className="Filter">
      <h4>Filter by Catagory</h4>
      <Link to="/compare-plan/basic">Basic</Link>
      <Link to="/compare-plan/standard">Standard</Link>
      <Link to="/compare-plan/perl">Perl</Link>
      <Link to="/compare-plan/diamond">Diamond</Link>
    </div>
    <main>{props.children}</main>
  </div>
);

export default layout;
