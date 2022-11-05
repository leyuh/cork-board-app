import COLORS from '../modules/colorsModule';
import '../styles/ColorPanel.css';
import React from 'react';

function ColorPanel (props) {

    const {setShowColorPanel, setPlacingComponent, setSelectedComp, colorChoosingComp, setColorChoosingComp, setPlacingColor} = props;

    return <div id="color-panel-div">
        {Object.values(COLORS).map((val) => {
            return val.map((color) => {
                return <div className="color-div" style={{
                    backgroundColor: color
                }} key={color} onClick={(e) => {
                    setShowColorPanel(false);
                    setSelectedComp(null);
                    setPlacingComponent(colorChoosingComp);
                    setColorChoosingComp(null);
                    setPlacingColor(color);
                }}></div>
            })
        })}
    </div>
}

export default ColorPanel;