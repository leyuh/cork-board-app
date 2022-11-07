import React from 'react';
import '../styles/BoardTools.css';

function BoardTools (props) {

    const {boardName, boardComponents, setBoardComponents, selectedComp, setSelectedComp, setPlacingComponent} = props;

    return <div id="board-tools-div">
        <button id="delete-comp-btn" className="comp-btn" onClick={() => {
            let deletedKey = selectedComp.getAttribute("k");
            setSelectedComp(null);


            let newBoardComps = boardComponents;
            newBoardComps[boardName].splice(deletedKey, 1);

            setBoardComponents(newBoardComps);
            localStorage.setItem("board-comps", JSON.stringify(boardComponents));
        }}>X</button>
        <button id="move-comp-btn" className="comp-btn" onClick={() => {
            setPlacingComponent(selectedComp.getAttribute("class"))
        }}>&gt;</button>
    </div>
}

export default BoardTools;