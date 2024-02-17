import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import React from 'react';
import StarRating from './components/star-rating';

function App () {
    return (
        <div className="App">
            {/* Accordion component */}
            {/* <Accordion /> */}

            {/* Random colour component */}
            {/* <RandomColour /> */}

            {/* Star rating component */}
            <StarRating noOfStars={10} />
        </div>
    );
}

export default App;
