import { useEffect } from 'react';
import '../styles/Board.css';
import StickyNote from './StickyNote';
import React from 'react';


function Board(props) {

  const {name, placingComponent, setPlacingComponent, boardComponents, setBoardComponents} = props;




  const PlaceBoardComponent = (e) => {
    if (e.target.className === "main-board-div") {
      let compType = placingComponent;
      let posX = e.pageX;
      let posY = e.pageY;

      setPlacingComponent("");
      
      let thisCompData = [compType, posX, posY, ""];

      if (boardComponents[name]) {
        let newBoardComps = boardComponents;
        newBoardComps[name].push(thisCompData);

        setBoardComponents(newBoardComps);
      }
    }
  }

  useEffect(() => {

    if (placingComponent !== "") {
      document.addEventListener("click", PlaceBoardComponent);
    }

    return (() => {
      document.removeEventListener("click", PlaceBoardComponent);
    })

  }, [placingComponent])

  useEffect(() => {
    console.log("PING ", boardComponents[name]);
  })

  return (
    <div className="main-board-div">
      {(boardComponents[name] && boardComponents[name].length > 0) ? boardComponents[name].map((val, i) => {
        switch (val[0]) {
          case "sticky note":
            return <StickyNote
              posX={val[1]} 
              posY={val[2]} 
              key={i}
            />
          default:
            return ""
        }
      }) : ""}
    </div>
  );
}

export default Board;
