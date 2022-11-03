import React, { useState, useEffect } from "react";
import Board from './Board';
import Welcome from './Welcome';
import Nav from './Nav';
import '../styles/App.css';
import AddCompMenu from "./AddCompMenu";

function App () {

    const boardCompList = ["sticky-note", "list", "sheet"];

    const [selectedComp, setSelectedComp] = useState(null);

    const [boardCount, setBoardCount] = useState(0);

    const [boardComponents, setBoardComponents] = useState({});

    const [currentBoard, setCurrentBoard] = useState("");
    
    const [showInput, setShowInput] = useState(false);

    const [showBoardCompMenu, setShowBoardCompMenu] = useState(false);

    const [placingComponent, setPlacingComponent] = useState("");

    const clickFunction = (e) => {
        let div = false;
        boardCompList.forEach((val) => {
            if (e.target.getAttribute("class") === `${val}-div`) {
                div = e.target;
            } else if (e.target.parentNode !== null && e.target.parentNode.getAttribute("class") === `${val}-div`) {
                div = e.target.parentNode;
            } else if (e.target.parentNode.parentNode !== null && e.target.parentNode.parentNode.getAttribute("class") === `${val}-div`) {
                div = e.target.parentNode.parentNode;
            }
        })

        if (div && div !== selectedComp) {
            setSelectedComp(div);
            return 1;
        } else {
            if (e.target.getAttribute("class") === "main-board-div") {
                setSelectedComp(null);
            }
        }

        return 0;
    }


    useEffect(() => {
        window.addEventListener('click', (e) => clickFunction(e));

        return () => {
          window.removeEventListener('click', (e) => clickFunction(e))
        }
      }, [])

    useEffect(() => {
        let inp = document.getElementById("board-name-input");
        let boardName;
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
            }
            
        })

    }, [showInput])

    // placing component effect
    useEffect(() => {
        if (placingComponent !== "") {
            document.body.style.cursor = "grab";
        } else {
            document.body.style.cursor = "default";
        }


    }, [placingComponent])


    // Board components & count local storage
    useEffect(() => {
        let data = localStorage.getItem("board-comps");
        if (data !== "{}") {
            setBoardComponents(JSON.parse(data));
            setBoardCount(Object.keys(JSON.parse(data) || {}).length);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("board-comps", JSON.stringify(boardComponents));
    }, [boardComponents, boardCount])


    // Current board local storage
    useEffect(() => {
        let data = localStorage.getItem("current-board");
        if (data !== "") {
            setCurrentBoard(data);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("current-board", currentBoard);
    }, [currentBoard])




    const AddBoard = (name) => {
        // update state to hold new name
        if (name !== "" && name !== " ") {
            setBoardCount(oldCount => oldCount + 1);

            setCurrentBoard(name);
            setSelectedComp(null);

            let copy = boardComponents;
            copy[name] = [];

            setBoardComponents(copy);
        }
        return 1;
    }

    const DeleteBoard = (name) => {
        setBoardCount(oldCount => oldCount - 1);

        if (currentBoard === name) {
            setCurrentBoard("");
            setSelectedComp(null);
        }

        let newComps = {};
        for (const [key, value] of Object.entries(boardComponents)){
            if (key !== name) {
                newComps[key] = value;
            }
        }

        setBoardComponents(newComps);
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
            setSelectedComp={setSelectedComp}
        />
        {(boardCount === 0) ? <Welcome/> : <Board
            name={currentBoard}
            placingComponent={placingComponent}
            setPlacingComponent={setPlacingComponent}
            boardComponents={boardComponents}
            setBoardComponents={setBoardComponents}
            selectedComp={selectedComp}
            setSelectedComp={setSelectedComp}
        />}

        {showBoardCompMenu ? <AddCompMenu
            setShowBoardCompMenu={setShowBoardCompMenu}
            setPlacingComponent={setPlacingComponent}
            setSelectedComp={setSelectedComp}
        /> : ""}

    </div>

}

export default App;