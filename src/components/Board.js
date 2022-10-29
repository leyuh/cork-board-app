import { useEffect, useState } from 'react';
import corkImage from '../images/corkpattern.jpeg';
import '../styles/Board.css';
import StickyNote from './StickyNote';


function Board(props) {

  const {name, placingComponent, setPlacingComponent, currentBoards, boardComponents, setBoardComponents} = props;

  var boardIndex = currentBoards.indexOf(name);

  const updateInput = (val, indx) => {
    let newBoardComps = boardComponents;
    newBoardComps[boardIndex][indx][3] = val;
    setBoardComponents(newBoardComps);
    console.log(boardComponents);
  }

  const PlaceBoardComponent = (e) => {
    if (e.target.className == "main-board-div") {
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

    if (placingComponent != "") {
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
              boardName={name} 
              posX={val[1]} 
              posY={val[2]} 
              boardComponents={ boardComponents }
              setBoardComponents= { setBoardComponents }
              currentBoards={ currentBoards }
              boardIndex = {boardIndex}
              indx={i}
              updateInput={() => updateInput}
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
