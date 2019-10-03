import React from "react";

import './Include.css';

const include = (props) => {
  return (
    <li className="includeElement">{props.include}</li>
  );
};
export default include;
