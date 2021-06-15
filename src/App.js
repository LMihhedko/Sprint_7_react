import './App.css';

import teatroImage from './img/teatro.jpg'
import React from "react";
import Linea from './components/Linea'; 
import textData from './textos.json';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    background-image: url(${teatroImage});
    background-size:cover;

`;

function App() {
    const quoteComponents = textData.map(phrase => <Linea quote= {phrase} />)

    return ( 

      <Wrapper>
          {quoteComponents}
      </Wrapper>
       
      );
}

export default App;
