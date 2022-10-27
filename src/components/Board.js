import corkImage from '../images/corkpattern.jpeg';
import '../styles/Board.css';
import StickyNote from './StickyNote';

function Board(props) {
  const {name} = props;

  return (
    <div className="main-board-div">

      <StickyNote/>
    </div>
  );
}

export default Board;
