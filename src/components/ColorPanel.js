import COLORS from '../modules/colorsModule';
import '../styles/ColorPanel.css';
import React from 'react';

function ColorPanel (props) {

    const {showColorPanel, setShowColorPanel, placingData, setPlacingData} = props;


    return <div id="color-panel-div">
        {Object.values(COLORS).map((val) => {
            return val.map((color) => {
                return <div className="color-div" style={{
                    backgroundColor: color
                }} key={color} onClick={(e) => {
                    if (showColorPanel === "color") {
                        let tempData = placingData;
                        tempData[1] = color;
                        setPlacingData(tempData);
                    } else if (showColorPanel === "font color") {
                        let tempData = placingData;
                        tempData[3] = color;
                        setPlacingData(tempData);
                    }
                    setShowColorPanel(false);
                }}></div>
            })
        })}
    </div>
}

export default ColorPanel;