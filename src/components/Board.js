import { useEffect } from 'react';
import '../styles/Board.css';
import StickyNote from './StickyNote';
import React from 'react';


function Board(props) {

  const {name, placingComponent, setPlacingComponent, currentBoards, boardComponents, setBoardComponents, updateInput} = props;

  var boardIndex = currentBoards.indexOf(name);



  const PlaceBoardComponent = (e) => {
    if (e.target.className === "main-board-div") {
      let compType = placingComponent;
      let posX = e.pageX;
      let posY = e.pageY;

      setPlacingComponent("");
      
      let thisCompData = [compType, posX, posY, ""];

      let newBoardComps = boardComponents;
      newBoardComps[boardIndex].push(thisCompData);

      setBoardComponents(newBoardComps);
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


  return (

    <div className="main-board-div">

      {boardComponents[boardIndex].map((val, i) => {
        switch (val[0]) {
          case "sticky note":
            return <StickyNote
              posX={val[1]} 
              posY={val[2]} 
              content={val[3]}
              boardIndex = {boardIndex}
              updateInput = {updateInput}
              indx={i}
              key={i}
            />
          default:
            return ""
        }
      })}
    </div>
  );
}

export default Board;
