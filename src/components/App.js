import React, { useState, useEffect } from "react";
import Board from './Board';
import Welcome from './Welcome';
import Nav from './Nav';
import '../styles/App.css';
import AddCompMenu from "./AddCompMenu";

function App () {


    const [boardCount, setBoardCount] = useState(0);

    const [boardComponents, setBoardComponents] = useState({});

    const [currentBoard, setCurrentBoard] = useState("");
    
    const [showInput, setShowInput] = useState(false);

    const [showBoardCompMenu, setShowBoardCompMenu] = useState(false);

    const [placingComponent, setPlacingComponent] = useState("");



    useEffect(() => {
        let inp = document.getElementById("board-name-input");
        let boardName
        let listener;
        if (showInput) {
            listener = inp.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    // ENTER PRESSED
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

    // placing component effect
    useEffect(() => {
        if (placingComponent === "sticky note") {
            document.body.style.cursor = "grab";
            // add event listener to current board, place sticky note when clicked and change placingComponent to ""
        } else if (placingComponent === "") {
            document.body.style.cursor = "default";
        }

    }, [placingComponent])


    const AddBoard = (name) => {
        // update state to hold new name
        if (name !== "" && name !== " ") {
            setBoardCount(oldCount => oldCount + 1);

            setCurrentBoard(name);
            setBoardComponents((comps) => {
                let copy = comps;
                copy[name] = [];
                return copy;
            })
        }
        return 1;
    }

    const DeleteBoard = (name) => {
        setBoardCount(oldCount => oldCount - 1);

        if (currentBoard === name) {
            setCurrentBoard("");
        }

        let newComps = {};
        for (const [key, value] of Object.entries(boardComponents)){
            if (key !== name) {
                newComps[key] = value;
            }
        }

        setBoardComponents(newComps);

        setCurrentBoard("");
        return 1;
    }


    return <div id="background-div">
        <Nav 
            setShowInput={setShowInput}
            showInput={showInput}
            DeleteBoard={DeleteBoard}
            boardComponents={boardComponents}
            setCurrentBoard={setCurrentBoard}
            showBoardCompMenu={showBoardCompMenu}
            setShowBoardCompMenu={setShowBoardCompMenu}
        />
        {(boardCount === 0) ? <Welcome/> : <Board
            name={currentBoard}
            placingComponent={placingComponent}
            setPlacingComponent={setPlacingComponent}
            boardComponents={boardComponents}
            setBoardComponents={setBoardComponents}
        />}

        {showBoardCompMenu ? <AddCompMenu
            setShowBoardCompMenu={setShowBoardCompMenu}
            setPlacingComponent={setPlacingComponent}
        /> : ""}

    </div>

}

export default App;