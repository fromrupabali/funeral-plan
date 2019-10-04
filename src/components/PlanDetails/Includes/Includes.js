import React from 'react';

import Include from './Include/Include';

const includes = (props)=> {
    const includes = props.includes.map(include => {
        return <Include key={include} include={include}/>
    })
    return(
           <ul style={{listStyle:'none'}}>
               {includes}
           </ul>
         );

}
export default includes;