import '../styles/StickyNote.css';
import { useState, useEffect } from 'react';
import { update } from 'tar';

function StickyNote (props) {

    const {boardName, posX, posY, boardComponents, setBoardComponents, currentBoards, boardIndex, indx, updateInput} = props;


    return <div className="sticky-note-div" style={{
        position: "absolute",
        left: `${posX - 375}px`,
        top: `${posY - 75}px`,
    }}>
        <textarea 
            className="sticky-note-textarea" 
            defaultValue={boardComponents[boardIndex][indx][3]} 
            onInput={(e) => {updateInput(e.target.value, indx)}}>
        </textarea>
    </div>
}

export default StickyNote;