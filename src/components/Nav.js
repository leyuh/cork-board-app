import React, { useState, useEffect } from "react";
import '../styles/Nav.css';
import NavItem from './NavItem';

function Nav(props) {
    // state to hold board count
    const [boardCount, setBoardCount] = useState(0);
    // state to hold all current boards
    const [currentBoards, setCurrentBoards] = useState([]);
    
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        let inp = document.getElementById("board-name-input");
        let boardName
        let listener;
        if (showInput) {
            listener = inp.addEventListener("keydown", (e) => {
                if (e.key == "Enter") {
                    // ENTER PRESSED
                    console.log("ping");
                    boardName = inp.value;
                    setShowInput(false);
                    AddBoard(boardName);
                }
            })
        }

        return (() => {
            if (showInput) {
                inp.removeEventListener("keydown", listener);
                console.log("Board name input cleaned up")
            }
            
        })

    }, [showInput])

    const AddBoard = (name) => {
        // update state to hold new name
        if (name != "" && name != " ") {
            setBoardCount(oldCount => oldCount + 1);
            setCurrentBoards((boards) => {
            return [...currentBoards,
            name]
        })
        }
        return 1;
    }

    useEffect(() => {
        console.log("nav rendered");
        console.log(boardCount);
    })

    return <div id="nav-div">
        <h1 id="my-boards-text">My Boards</h1>
        <button id="add-board-button" onClick={() => {
            setShowInput(!showInput);
        }}>+</button>
        {currentBoards.map((name, i) => {
            return <NavItem boardName={name} index={i} key={i}/>
        })}
        {showInput ? <input type="text" id="board-name-input" placeholder="Board name" autoFocus/> : ""}

    </div>
}

export default Nav;