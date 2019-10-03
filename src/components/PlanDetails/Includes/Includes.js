import React from 'react';

import Include from './Include/Include';

const includes = (props)=> {
    const includes = props.includes.map(include => {
        return <Include include={include}/>
    })
    return(
           <ul>
               {includes}
           </ul>
         );

}
export default includes;