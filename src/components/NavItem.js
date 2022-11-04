import '../styles/NavItem.css';
import React from 'react';

function NavItem (props) {
    const {boardName, setCurrentBoard, DeleteBoard} = props;
    return <div className="nav-item-div">
        <h3 onClick={() => {
            setCurrentBoard(boardName);
        }}>{boardName}</h3>
        <button className="nav-item-btn delete-board-btn" onClick={() => {
            DeleteBoard(boardName);
        }}>X</button>
    </div>

}

export default NavItem;