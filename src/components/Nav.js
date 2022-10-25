import React, { useState, useEffect } from "react";
import '../styles/Nav.css';
import NavItem from './NavItem';

function Nav(props) {

    const {setShowInput, showInput, currentBoards} = props;

    return <div id="nav-div">
        <h1 id="my-boards-text">My Boards</h1>
        <button id="add-board-button" onClick={() => {
            setShowInput(!showInput);
        }}>+</button>
        {currentBoards.map((name, i) => {
            return <NavItem boardName={name} index={i} key={i}/>
        })}
        {showInput ? <input type="text" id="board-name-input" placeholder="Board name" autoFocus/> : ""}

    </div>
}

export default Nav;