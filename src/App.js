import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColour from './components/random-color';
import React from 'react';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from 'components/load-more-data';
import menus from 'components/tree-view/data';
import TreeView from 'components/tree-view';
import { QRCodeGenerator } from 'components/qr-code-generator';
import LightDarkMode from 'components/light-dark-mode';
import ScrollIndicator from 'components/scroll-indicator';
import TabTest from 'components/custom-tabs/tab-test';
import ModalTest from 'components/custom-modal-popup/modal-test';
import GithubProfileFinder from 'components/github-profile-finder';
import SearchAutocomplete from 'components/search-autocomplete';
import TicTacToe from 'components/tic-tac-toe';
import FeatureFlagGlobalState from 'components/feature-flag/context';
import FeatureFlags from 'components/feature-flag';
import UseFetchHookTest from 'components/use-fetch/test';

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
            {/* <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            /> */}

            {/* Load more products component */}
            {/* <LoadMoreData /> */}

            {/* Tree view component / menu UI component / recursive navigation menu */}
            {/* <TreeView menus={menus} /> */}

            {/* QR code generator */}
            {/* <QRCodeGenerator /> */}

            {/* Light and Dark theme switch */}
            {/* <LightDarkMode /> */}

            {/* Scroll indicator component */}
            {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

            {/* Custom tabs component */}
            {/* <TabTest /> */}

            {/* Custom modal component */}
            {/* <ModalTest /> */}

            {/* Github profile finder component */}
            {/* <GithubProfileFinder /> */}

            {/* Search autocomplete component */}
            {/* <SearchAutocomplete /> */}

            {/* Tic tac toe component */}
            {/* <TicTacToe /> */}

            {/* Feature flag implementation */}
            {/* <FeatureFlagGlobalState children={undefined}>
                <FeatureFlags />
            </FeatureFlagGlobalState> */}
            
            {/* useFetch - Custom Hook */}
            <UseFetchHookTest />
        </div>
    );
}

export default App;
