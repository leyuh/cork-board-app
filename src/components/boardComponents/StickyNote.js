import '../../styles/StickyNote.css';
import React from 'react';
import { useEffect, useRef } from 'react';

function StickyNote (props) {

    var textBox = useRef(null);
    var div = useRef(null);

    const { boardName, compIndex, data, boardComponents, setBoardComponents, selectedComp, k} = props;

    const [posX, posY, color, font, fontColor] = data;

    useEffect(() => {
        textBox.current.value = boardComponents[boardName][compIndex][6];
    }, [boardName])

    useEffect(() => {
        if (selectedComp === div.current) {
            div.current.style["border"] = "5px solid rgba(225, 30, 30)";
        } else {
            div.current.style["border"] = "0px";
        }
    }, [selectedComp])


    return <div className="sticky-note-div" ref={div} k={k} style={{
        position: "absolute",
        left: `calc(${posX}px - 6.5vw)`,
        top: `calc(${posY}px - 2vw)`,
        backgroundColor: color,
        color: fontColor,
        fontFamily: font
    }}>
        <textarea
            ref={textBox} 
            className="sticky-note-textarea"
            defaultValue={""}
            onInput={(e) => {
                setBoardComponents(() => {
                    let newBoardComps = {...boardComponents};
                    newBoardComps[boardName][compIndex][6] = e.target.value;
                    return newBoardComps;
                })
            }}
        >
        </textarea>
    </div>
}

export default StickyNote;