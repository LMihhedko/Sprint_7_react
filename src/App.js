import './App.css';

import React, {useState} from "react";
import Linea from './components/Linea';
import textData from './textos.json';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Button = styled.button`  
    width:300px;
    height:40px;
`;

function App() {
            
    const [selected, setSelected] = useState(0);
       
    const handleQuotePrev = () => {

        setSelected(prev => {

            if (prev === 0){
                return prev = 6;
            } else {
                return prev - 1;
            }
        });
    };

    const handleQuoteNext = () => {

        setSelected(next => {

            if (next === 6){
                return next = 0;
            } else {
                return next + 1;
            }

        });
    };

    const quoteComponents = textData.map((phrase, index) =>  {
        return <Linea quote= {phrase} index = {index} selected = {selected} /> });
   
    return ( 

      <Wrapper>
           <Button onClick={handleQuotePrev}>Anterior</Button>
            <Button onClick={handleQuoteNext}>Següent</Button>
          {quoteComponents}
         
      </Wrapper>
       
      );
}

export default App;
