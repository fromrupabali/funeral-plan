import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './Include.css';

const include = (props) => {
  return (
    <li className="includeElement">
      <p>
        <span className="ListIcon">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        {props.include}
      </p>
    </li>
  );
};
export default include;
