import Accordion from "components/accordion";
import LightDarkMode from "components/light-dark-mode";
import RandomColour from "components/random-color";
import TicTacToe from "components/tic-tac-toe";
import TreeView from "components/tree-view";
import React, { useContext } from "react";
import { FeatureFlagContext } from "./context";
import menus from "components/tree-view/data";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagContext);

    const componenetsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColour />
        },
        {
            key: "showAccordion",
            component: <Accordion />
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus}/>
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) {
        return (
            <h1>
                Loading data ! Please Wait
            </h1>
        );
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componenetsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    );
}