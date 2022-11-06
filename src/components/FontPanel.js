import React from 'react';
import '../styles/FontPanel.css';

const FONTS = ["Arial", "Verdana", "Gill Sans", "Optima", "Arial Narrow", "Times New Roman", "Palatino", "Bookman", "American Typewriter", "Courier New", "Courier", "Comic Sans MS", "Bradley Hand", "URW Chancery L", "Impact", "Luminari", "Chalkduster", "Blippo", "Marker Felt", "Trattatello"];

function FontPanel (props) {

    const {setShowFontPanel, placingData, setPlacingData} = props;

    return <div id="font-panel-div">
        <ul>
            {FONTS.map((val, i) => {
                return <li className="font-item" style={{
                    fontFamily: val
                }} onClick={() => {
                    let tempData = placingData;
                    tempData[2] = val;
                    setPlacingData(tempData);
                    setShowFontPanel(false);
                }} key={i}>{val}</li>
            })}
        </ul>
    </div>
}

export default FontPanel;