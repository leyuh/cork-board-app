import corkImage from '../images/corkpattern.jpeg';
import '../styles/Board.css';

function Board(props) {
  const {name} = props;

  return (
    <div className="main-board-div">


      {name}
    </div>
  );
}

export default Board;
