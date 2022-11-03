import React from 'react';
import '../styles/Nav.css';
import NavItem from './NavItem';

function Nav(props) {

    const {setShowInput, showInput, DeleteBoard, boardComponents, setCurrentBoard, showBoardCompMenu, setShowBoardCompMenu, setSelectedComp} = props;


    return <div id="nav-div">
        <h1 id="my-boards-text">My Boards</h1>
        <button id="add-board-button" onClick={() => {
            setShowInput(true);
        }}>+</button>
        {Object.keys(boardComponents || {}).map((name , i) => {
            return <NavItem 
                boardName={name} 
                key={i} 
                setCurrentBoard={setCurrentBoard} 
                DeleteBoard={DeleteBoard}
                showBoardCompMenu={showBoardCompMenu}
                setShowBoardCompMenu={setShowBoardCompMenu}
                setSelectedComp={setSelectedComp}
            />
        })}
        {showInput ? <input type="text" id="board-name-input" placeholder="Board name" autoFocus onBlur={() => setShowInput(!showInput)}/> : ""}

    </div>
}

export default Nav;