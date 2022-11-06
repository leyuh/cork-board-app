import '../styles/AddCompMenu.css';
import stickyNoteImg from '../images/stickyNote.png';
import listImg from '../images/list.png';
import sheetImg from '../images/sheet.png';
import React from 'react';

function AddCompMenu (props) {

    const {customizingComp, setCustomizingComp, placingData, setPlacingData} = props;

    const mainFunction = (compName) => {
        if (customizingComp !== compName) {
            setCustomizingComp(compName);

            let tempData = placingData;
            tempData[0] = compName;
            setPlacingData(tempData);
        } else {
            setCustomizingComp(null);
        }
    }

    return <div id="add-comp-menu-div">
        <ul>
            <li>
                <img className="comp-img" id="mini-sticky-note-img" alt="" src={stickyNoteImg}></img>
                <button className="add-comp-btn" id="mini-sticky-note-btn" onClick={() => {
                    mainFunction("mini sticky note");
                }}></button>
            </li>
            <li>
                <img className="comp-img" id="sticky-note-img" alt="" src={stickyNoteImg}></img>
                <button className="add-comp-btn" id="sticky-note-btn" onClick={() => {
                    mainFunction("sticky note");
                }}></button>
            </li>
            <li>
                <img className="comp-img" id="list-img" alt="" src={listImg}></img>
                <button className="add-comp-btn" id="list-btn" onClick={() => {
                    mainFunction("list");
                }}></button>
            </li>
            <li>
                <img className="comp-img" id="sheet-img" alt="" src={sheetImg}></img>
                <button className="add-comp-btn" id="sheet-btn" onClick={() => {
                    mainFunction("sheet");
                }}></button>
            </li>
        </ul>
    </div>

}

export default AddCompMenu;