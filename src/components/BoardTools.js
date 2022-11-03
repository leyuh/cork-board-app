import React from 'react';
import '../styles/BoardTools.css';

function BoardTools (props) {

    const {boardName, boardComponents, setBoardComponents, selectedComp, setSelectedComp} = props;

    return <div id="board-tools-div">
        <button id="delete-comp-btn" className="comp-btn" onClick={() => {
            let deletedKey = selectedComp.getAttribute("k");
            setSelectedComp(null);


            let newBoardComps = boardComponents;
            console.log(deletedKey)
            newBoardComps[boardName].splice(deletedKey, 1);

            setBoardComponents(newBoardComps);
            console.log(boardComponents);

        }}>X</button>
        <button id="move-comp-btn" className="comp-btn">&gt;</button>
    </div>
}

export default BoardTools;