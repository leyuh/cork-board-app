import '../../styles/StickyNote.css';
import React from 'react';
import { useEffect, useRef } from 'react';

function StickyNote (props) {

    var textBox = useRef(null);
    var div = useRef(null);

    const { boardName, compIndex, posX, posY, color, boardComponents, setBoardComponents, selectedComp} = props;

    useEffect(() => {
        textBox.current.value = boardComponents[boardName][compIndex][4];
    }, [boardName])

    useEffect(() => {
        if (selectedComp === div.current) {
            div.current.style["border"] = "5px solid red";
        } else {
            div.current.style["border"] = "0px";
        }
    }, [selectedComp])


    return <div className="sticky-note-div" ref={div} style={{
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