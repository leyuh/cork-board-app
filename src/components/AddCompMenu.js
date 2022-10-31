import '../styles/AddCompMenu.css';
import stickyNoteImg from '../images/stickyNote.png';
import listImg from '../images/list.png';
import React from 'react';

function AddCompMenu (props) {

    const { setShowBoardCompMenu, setPlacingComponent} = props;

    return <div id="add-comp-menu-div">
        <h1 id="add-comp-title">Add Component:</h1>
        <ul>
            <li>
                <img className="comp-img" id="sticky-note-img" alt="" src={stickyNoteImg}></img>
                <button className="add-comp-btn" onClick={() => {
                    setShowBoardCompMenu(false);
                    setPlacingComponent("sticky note");
                }}>Sticky Note</button>
            </li>
            <li>
                <img className="comp-img" id="list-img" alt="" src={listImg}></img>
                <button className="add-comp-btn" onClick={() => {
                    setShowBoardCompMenu(false);
                    setPlacingComponent("list");
                }}>List</button>
            </li>
        </ul>
        <button id="cancel-btn" onClick={(e) => {
            setShowBoardCompMenu(false);
        }}>Cancel</button>
    </div>

}

export default AddCompMenu;