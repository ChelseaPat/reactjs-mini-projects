// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let copyMultiple = [...multiple];

        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultSelection)}>Enable Multi Selection</button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                    <div className="item">
                        <div onClick={
                            enableMultSelection 
                            ? () => handleMultipleSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                            } 
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultSelection 
                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            : selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )
                        }
                    </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    );
}