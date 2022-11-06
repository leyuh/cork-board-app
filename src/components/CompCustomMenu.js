import React from 'react';
import '../styles/CompCustomMenu.css';

function CompCustomMenu (props) {


    const {placingData, showColorPanel, setShowColorPanel, setCustomizingComp, setPlacingComponent, showFontPanel, setShowFontPanel} = props;

    let compName = placingData[0].charAt(0).toUpperCase() + placingData[0].slice(1);


    return <div id="comp-custom-div">
        <h1 id="chosen-comp-title">{compName}</h1>
        <div className="comp-custom-item">
            <h3 id="choose-color-text">Color:</h3>
            <button id="chosen-color-btn" style={{
                backgroundColor: placingData[1]
            }} className="chosen-color" onClick={() => {
                if (!showColorPanel) {
                    setShowColorPanel("color");
                    setShowFontPanel(false);
                } else {
                    setShowColorPanel(false);
                }
            }}></button>
        </div>
        <div className="comp-custom-item">
            <h3 id="choose-font-text" style={{width: "70px"}}>Font:</h3>
            <button id="chosen-font-btn" onClick={() => {
                setShowFontPanel(!showFontPanel);
                setShowColorPanel(false);
            }}>{placingData[2] || "Comic Sans MS"}</button>
        </div>
        <div className="comp-custom-item">
            <h3 id="choose-font-color-text">Font Color:</h3>
            <button id="chosen-font-color-btn" style={{
                backgroundColor: placingData[3]
            }} className="chosen-color" onClick={() => {
                if (!showColorPanel) {
                    setShowColorPanel("font color");
                    setShowFontPanel(false);
                } else {
                    setShowColorPanel(false);
                }
            }}></button>
        </div>
        <button id="place-comp-btn" onClick={() => {
            setPlacingComponent(placingData[0]);
            setCustomizingComp(null);
        }}>PLACE</button>

    </div>
}

export default CompCustomMenu;