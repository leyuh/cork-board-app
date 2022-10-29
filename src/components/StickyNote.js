import '../styles/StickyNote.css';
import { useState, useEffect } from 'react';

function StickyNote (props) {

    const {boardName, posX, posY, boardComponents, setBoardComponents, currentBoards, boardIndex, indx} = props;

    const updateContents = (e) => {
        let newBoardComps = boardComponents;
        newBoardComps[boardIndex][indx][3] = e.target.value;
        setBoardComponents(newBoardComps);
    }

    return <div className="sticky-note-div" style={{
        position: "absolute",
        left: `${posX - 375}px`,
        top: `${posY - 75}px`,
    }}>
        <textarea className="sticky-note-textarea" defaultValue={""} onInput={(e) => {
            updateContents(e);
        }}>
        </textarea>
    </div>
}

export default StickyNote;