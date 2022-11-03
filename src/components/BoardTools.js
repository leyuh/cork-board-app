import React from 'react';
import '../styles/BoardTools.css';

function BoardTools (props) {

    const {boardName, boardComponents, setBoardComponents, selectedComp, setSelectedComp, setPlacingComponent} = props;

    return <div id="board-tools-div">
        <button id="delete-comp-btn" className="comp-btn" onClick={() => {
            let deletedKey = selectedComp.getAttribute("k");
            setSelectedComp(null);


            let newBoardComps = boardComponents;
            console.log(deletedKey)
            newBoardComps[boardName].splice(deletedKey, 1);

            setBoardComponents(newBoardComps);

        }}>X</button>
        <button id="move-comp-btn" className="comp-btn" onClick={() => {
            setPlacingComponent(selectedComp.getAttribute("class"))
        }}>&gt;</button>
    </div>
}

export default BoardTools;