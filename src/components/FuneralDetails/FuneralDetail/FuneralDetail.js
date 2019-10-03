import React from 'react';

import './FuneralDetail.css';
const funeralDetail= (props)=> (
   <div className="FuneralDetail">
     <h1>{props.h1}</h1>
     <p>{props.p}</p>
   </div>
);

export default funeralDetail;