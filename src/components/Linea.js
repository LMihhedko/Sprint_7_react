import React from 'react';
import styled from 'styled-components';

const SelectedP = styled.p`
    background-color: rgb(222, 155, 155);

`

const Linea = (props) => {
    
    return (

        (props.selected === props.index) ? 
        <div>
        <SelectedP>{props.quote}</SelectedP>
        </div> :
        <p>{props.quote}</p>
    )
 }

 export default Linea; 