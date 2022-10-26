import '../styles/NavItem.css';

function NavItem (props) {
    const {boardName, index, setCurrentBoard, currentBoard, currentBoards, setCurrentBoards, DeleteBoard} = props;
    return <div id={`nav-item-${index}`} className="nav-item-div">
        <h3 onClick={() => {
            setCurrentBoard(boardName);
        }}>{boardName}</h3>
        <button className="nav-item-btn delete-board-btn" onClick={() => {
            DeleteBoard(boardName);
        }}></button>
        <button className="nav-item-btn rename-board-btn"></button>
        <button className="nav-item-btn add-component-btn"></button>
    </div>

}

export default NavItem;