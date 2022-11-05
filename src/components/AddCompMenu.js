import '../styles/AddCompMenu.css';
import stickyNoteImg from '../images/stickyNote.png';
import listImg from '../images/list.png';
import sheetImg from '../images/sheet.png';
import React from 'react';

function AddCompMenu (props) {

    const {showColorPanel, setShowColorPanel, setColorChoosingComp} = props;



    return <div id="add-comp-menu-div">
        <ul>
            <li>
                <img className="comp-img" id="sticky-note-img" alt="" src={stickyNoteImg}></img>
                <button className="add-comp-btn" id="sticky-note-btn" onClick={() => {
                    setShowColorPanel(!showColorPanel)
                    setColorChoosingComp(!showColorPanel ? "sticky note" : "");
                }}></button>
                <h4 className="comp-label" id="sticky-note-label">Sticky note</h4>
            </li>
            <li>
                <img className="comp-img" id="list-img" alt="" src={listImg}></img>
                <button className="add-comp-btn" id="list-btn" onClick={() => {
                    setShowColorPanel(!showColorPanel)
                    setColorChoosingComp(!showColorPanel ? "list" : "");
                }}></button>
                <h4 className="comp-label" id="list-label">List</h4>
            </li>
            <li>
                <img className="comp-img" id="sheet-img" alt="" src={sheetImg}></img>
                <button className="add-comp-btn" id="sheet-btn" onClick={() => {
                    setShowColorPanel(!showColorPanel)
                    setColorChoosingComp(!showColorPanel ? "sheet" : "");
                }}></button>
                <h4 className="comp-label" id="sheet-label">Sheet</h4>
            </li>
        </ul>
    </div>

}

export default AddCompMenu;