import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import React from 'react';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App () {
    return (
        <div className="App">
            {/* Accordion component */}
            {/* <Accordion /> */}

            {/* Random colour component */}
            {/* <RandomColour /> */}

            {/* Star rating component */}
            {/* <StarRating noOfStars={10} /> */}

            {/* Image slider component */}
            <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            />
        </div>
    );
}

export default App;
