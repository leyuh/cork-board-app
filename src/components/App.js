import React, { useState, useEffect } from "react";
import Board from './Board';
import Welcome from './Welcome';
import Nav from './Nav';
import '../styles/App.css';

function App () {

    const [boardCount, setBoardCount] = useState(0);

    // state to hold all current boards
    const [currentBoards, setCurrentBoards] = useState([]);

    const [currentBoard, setCurrentBoard] = useState("");
    
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
                return [...boards,
                name]
            })
            setCurrentBoard(name);
        }
        return 1;
    }

    const DeleteBoard = (name) => {
        setBoardCount(oldCount => oldCount - 1);

        if (currentBoard == name) {
            setCurrentBoard("");
        }

        let newBoards = [];
        currentBoards.forEach((n, indx) => {
            if (n != name) {
                newBoards.push(n);
            }
        })

        setCurrentBoards(oldBoards => newBoards);
        setCurrentBoard("");
        return 1;
    }


    return <div id="background-div">
        <Nav 
        setShowInput={setShowInput}
        showInput={showInput}
        currentBoards={currentBoards}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        setCurrentBoards={setCurrentBoards}
        DeleteBoard={DeleteBoard}
        />
        {(boardCount == 0) ? <Welcome/> : <Board name={currentBoard}/>}

    </div>

}

export default App;