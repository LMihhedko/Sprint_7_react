import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    width: 600px;
    height: 60px;
    background-color:lightsteelblue;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .2s;

    &:hover{
        background-color:Brown;
        transform: scale(1.2)
    }
`
const Paragraph = styled.p`
    margin:0px;
    padding:20px;
`

const Linea = ({quote}) => {
    return (
        <Background>
            <Paragraph>{quote}</Paragraph>
        </Background>
    )
 }

 export default Linea; 