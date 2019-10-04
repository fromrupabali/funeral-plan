import React from "react";

import "./Modal.css";

import Backdrop from "../BackDrop/BackDrop";

const modal = props => (
  <div>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
