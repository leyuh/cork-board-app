import React, {useState, useRef} from 'react';
import '../styles/Nav.css';
import NavItem from './NavItem';

function Nav(props) {

    const {setShowInput, showInput, DeleteBoard, boardComponents, setCurrentBoard, showBoardCompMenu, setShowBoardCompMenu, setSelectedComp} = props;

    // for phone users-
    const [showNav, setShowNav] = useState((window.innerWidth >= 1400) ? true : false);

    const navDiv = useRef(null);
    const navBtn = useRef(null);

    return <div id="nav-div" ref={navDiv} style={{
        "left" : (window.innerWidth >= 1400) ? "0px" : "-330px"
    }}>
        <h1 id="my-boards-text">My Boards</h1>
        <button id="add-board-button" onClick={() => {
            setShowInput(true);
        }}>+</button>

        <button id="minimize-nav-btn" ref={navBtn} onClick={() => {
            if (showNav) {
                // close nav
                navDiv.current.style["left"] = "-330px";
                setShowNav(false);
            } else {
                // open nav
                navDiv.current.style["left"] = "0px";
                setShowNav(true);
            }
        }}>{showNav ? "<" : ">"}</button>

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