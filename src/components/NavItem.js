import '../styles/NavItem.css';
import React from 'react';

function NavItem (props) {
    const {boardName, index, setCurrentBoard, DeleteBoard, showBoardCompMenu, setShowBoardCompMenu} = props;
    return <div id={`nav-item-${index}`} className="nav-item-div">
        <h3 onClick={() => {
            setCurrentBoard(boardName);
        }}>{boardName}</h3>
        <button className="nav-item-btn delete-board-btn" onClick={() => {
            DeleteBoard(boardName);
        }}></button>
        <button className="nav-item-btn rename-board-btn"></button>
        <button className="nav-item-btn add-component-btn" onClick={() => {
            setShowBoardCompMenu(!showBoardCompMenu);
        }}></button>
    </div>

}

export default NavItem;