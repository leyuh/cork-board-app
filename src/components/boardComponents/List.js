import '../../styles/List.css';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Pin from "./Pin";


function List (props) {

    var listItems = useRef([]);
    var div = useRef(null);

    const [showInput, setShowInput] = useState(false);

    const { boardName, compIndex, posX, posY, color, boardComponents, setBoardComponents, selectedComp, k} = props;

    useEffect(() => {
 
        listItems.current.forEach((element, i) => {
            element.value = boardComponents[boardName][compIndex][4][i][0];
        });
    }, [boardName])

    useEffect(() => {
        if (selectedComp === div.current) {
            div.current.style["border"] = "5px solid rgba(225, 30, 30)";
        } else {
            div.current.style["border"] = "0px";
        }
    }, [selectedComp])


    useEffect(() => {
        let inp = document.getElementById(`item-input-${boardName}-${compIndex}`);
        let listText;
        let listener;
        if (showInput) {
            listener = inp.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    // ENTER PRESSED
                    listText = inp.value;
                    setShowInput(false);
                    addListItem(listText);
                }
            })
        }

        return (() => {
            if (showInput) {
                inp.removeEventListener("keydown", listener);
            }
            
        })

    }, [showInput])

    const updateContent = (e, listItemIndex) => {
        let newBoardComps = {...boardComponents};
        newBoardComps[boardName][compIndex][4][listItemIndex][0] = e.target.value;
        setBoardComponents(newBoardComps);
        return 1;
    }

    const crossOut = (e, listItemIndex) => {
        if (e.target.className !== "delete-list-item-btn") {
            let newBoardComps = {...boardComponents};
            let item = newBoardComps[boardName][compIndex][4][listItemIndex]
            item[1] = !(item[1]);
            setBoardComponents(newBoardComps);
            return 1;
        }
        return 0;
    }

    const addListItem = (txt) => {
        let newBoardComps = {...boardComponents};
        newBoardComps[boardName][compIndex][4].push([txt, false]);
        setBoardComponents(newBoardComps);
        return 1;
    }

    const removeListItem = (i) => {
        let newBoardComps = {...boardComponents};
        newBoardComps[boardName][compIndex][4].splice(i, 1);
        setBoardComponents(newBoardComps);
        return 1;
    }


    return <div className="list-div" ref={div} k={k} style={{
        position: "absolute",
        left: `${(((posX - 200) / (window.innerWidth - 200)) * 100) - 10}%`,
        top: `${((posY / window.innerHeight) * 100) - 22}%`,
        backgroundColor: color
    }}>
        <Pin className="pin"/>
        <button className="add-list-item" onClick={(e) => {
            let theseContents = boardComponents[boardName][compIndex][4]
            if ((theseContents.length === 0) || theseContents[theseContents.length - 1][0] !== "") {
                setShowInput(!showInput);
            }
        }}>+</button>

        <ul>
            {boardComponents[boardName][compIndex][4].map((elem, i) => {
                return <li 
                    className="list-item" 
                    key={`${boardName}-${compIndex}-${i}`} 
                    ref={listItems[i]} 
                    style={elem[1] ? {"textDecoration": "line-through"} : {}}
                    onInput={(e) => updateContent(e, i)}
                    onClick={(e) => crossOut(e, i)}
                >
                    <span style={{
                        color: (color === "#000000") ? "white" : "black"
                    }}>{` ${elem[0]} `}</span>
                    <div className="list-item-underline"></div>
                    {(selectedComp === div.current) ? 
                        <button className="delete-list-item-btn" onClick={() => removeListItem(i)}>X</button> 
                    : ""}
                </li>
            })}
        </ul>

        {showInput ? <input className="new-item-input" id={`item-input-${boardName}-${compIndex}`} type="text" autoFocus onBlur={() => {setShowInput(false)}} style={{
            color: (color === "#000000") ? "white" : "black"
        }}></input> : ""}
    </div>

}

export default List