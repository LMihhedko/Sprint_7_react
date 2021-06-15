import './App.css';

import React from "react"
import Linea from './components/Linea'; 
import textData from './textos.json'

function App() {
    const quoteComponents = textData.map(phrase => <Linea quote= {phrase} />)

    return ( 

        <div> 

            {quoteComponents}

        </div> 

      );
}

export default App;
