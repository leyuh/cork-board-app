import { useEffect, useState } from 'react';
import corkImage from '../images/corkpattern.jpeg';
import '../styles/Board.css';
import StickyNote from './StickyNote';


function Board(props) {
  const [contents, setContents] = useState([]);

  const {name, placingComponent, setPlacingComponent} = props;

  const PlaceBoardComponent = (e) => {
    if (e.target.className == "main-board-div") {
      let compType = placingComponent;
      let posX = e.pageX;
      let posY = e.pageY;

      setPlacingComponent("");

      setContents([...contents, [compType, posX, posY]]);
    }
  }

  useEffect(() => {

    if (placingComponent != "") {
      document.addEventListener("click", PlaceBoardComponent);
    }

    return (() => {
      document.removeEventListener("click", PlaceBoardComponent);
    })

  }, [placingComponent])


  return (

    <div className="main-board-div">

      {contents.map((val, i) => {
        switch (val[0]) {
          case "sticky note":
            return <StickyNote boardName={name} posX={val[1]} posY={val[2]} key={i}/>
          default:
            return ""
        }
      })}
    </div>
  );
}

export default Board;
