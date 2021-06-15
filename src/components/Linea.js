import React from 'react';

const Linea = (props) => {
    console.log(props.quote)

    return (
        <div>
            <p>{props.quote}</p>
        </div>
    )
 }

 export default Linea; 