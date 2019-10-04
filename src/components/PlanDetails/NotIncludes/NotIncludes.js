import React from "react";

import Include from "../Includes/Include/Include";

const notIncludes = props => {
  const notIncludes = props.includes.map(include => {
    return <Include include={include} />;
  });
  return <ul style={{ listStyle: "none" }}>{notIncludes}</ul>;
};
export default notIncludes;
