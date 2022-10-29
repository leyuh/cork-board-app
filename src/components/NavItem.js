import '../styles/NavItem.css';
import React from 'react';

function NavItem (props) {
    const {boardName, setCurrentBoard, DeleteBoard, showBoardCompMenu, setShowBoardCompMenu} = props;
    return <div className="nav-item-div">
        <h3 onClick={() => {
            console.log(boardName);
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