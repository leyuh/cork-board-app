import '../../styles/StickyNote.css';
import React from 'react';
import { useEffect, useRef } from 'react';

function StickyNote (props) {

    var textBox = useRef(null);

    const { boardName, compIndex, posX, posY, color, boardComponents, setBoardComponents, selectedComp, setSelectedComp} = props;

    useEffect(() => {
        textBox.current.value = boardComponents[boardName][compIndex][4];
    }, [boardName])

    return <div className="sticky-note-div" onClick={(e) => {
        setSelectedComp(e.target);
    }} style={{
        position: "absolute",
        left: `${posX - 375}px`,
        top: `${posY - 75}px`,
        backgroundColor: color
    }}>
        <textarea
            ref={textBox} 
            className="sticky-note-textarea"
            defaultValue={""}
            onInput={(e) => {
                setBoardComponents(() => {
                    let newBoardComps = {...boardComponents};
                    newBoardComps[boardName][compIndex][4] = e.target.value;
                    return newBoardComps;
                })
            }}
        >
        </textarea>
    </div>
}

export default StickyNote;