function NavItem (props) {
    const {boardName, index} = props;
    return <h3 className="nav-item" id={`nav-item-${index}`}>{boardName}</h3>
}

export default NavItem;