import '../styles/NavItem.css';
import React from 'react';

function NavItem (props) {
    const {boardName, setCurrentBoard, DeleteBoard, showBoardCompMenu, setShowBoardCompMenu, setSelectedComp} = props;
    return <div className="nav-item-div">
        <h3 onClick={() => {
            setCurrentBoard(boardName);
        }}>{boardName}</h3>
        <button className="nav-item-btn delete-board-btn" onClick={() => {
            DeleteBoard(boardName);
        }}>X</button>
        <button className="nav-item-btn add-component-btn" onClick={() => {
            setShowBoardCompMenu(!showBoardCompMenu);
            setCurrentBoard(boardName);
            setSelectedComp(null);
        }}>+</button>
    </div>

}

export default NavItem;