import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
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
      <h4>
        <span className="FilterIcon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        Filter by Catagory
      </h4>
      <Link  to="/agent">
        Basic
      </Link>
      <Link  to="/agent/standard">
        Standard
      </Link>
      <Link  to="/agent/perl">
        Perl
      </Link>
      <Link  to="/agent/diamond">
        Diamond
      </Link>
    </div>
    <main>{props.children}</main>
  </div>
);

export default layout;
