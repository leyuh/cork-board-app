import '../styles/AddCompMenu.css';
import stickyNoteImg from '../images/stickyNote.png';
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
        </ul>
    </div>

}

export default AddCompMenu;