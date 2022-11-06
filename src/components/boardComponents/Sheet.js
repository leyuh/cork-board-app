import '../../styles/Sheet.css';
import React from 'react';
import { useEffect, useRef } from 'react';
import Pin from './Pin';

function Sheet (props) {

    var textBox = useRef(null);
    var div = useRef(null);


    const { boardName, compIndex, posX, posY, color, boardComponents, setBoardComponents, selectedComp, k} = props;

    useEffect(() => {
        textBox.current.value = boardComponents[boardName][compIndex][4];
    }, [boardName])

    useEffect(() => {
        if (selectedComp === div.current) {
            div.current.style["border"] = "5px solid rgba(225, 30, 30)";
        } else {
            div.current.style["border"] = "0px";
        }
    }, [selectedComp])


    return <div className="sheet-div" ref={div} k={k} style={{
        position: "absolute",
        left: `${(((posX - 200) / (window.innerWidth - 200)) * 100) - 14}%`,
        top: `${((posY / window.innerHeight) * 100) - 24}%`,
        backgroundColor: color,
    }}>
        <Pin/>
        <textarea
            ref={textBox} 
            className="sheet-textarea"
            defaultValue={""}
            onInput={(e) => {
                setBoardComponents(() => {
                    let newBoardComps = {...boardComponents};
                    newBoardComps[boardName][compIndex][4] = e.target.value;
                    return newBoardComps;
                })
            }}
            style={{
                color: (color === "#000000") ? "white" : "black"
            }}
        >
        </textarea>
    </div>
}

export default Sheet;