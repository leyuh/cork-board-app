import { useEffect } from 'react';
import '../styles/Board.css';
import StickyNote from './boardComponents/StickyNote';
import List from './boardComponents/List';
import Sheet from './boardComponents/Sheet';
import React from 'react';

const COLORS = {
  "sticky note": ["#ffcc54", "#f29dc4", "#87cede", "#86db76"],
  "list": ["#ffffff"],
  "sheet": ["#ffffff"]
}

function getRandomColor(type) {
  let colors = COLORS[type];
  let random = Math.floor(Math.random()*colors.length);

  return colors[random];
}


function Board(props) {

  const {name, placingComponent, setPlacingComponent, boardComponents, setBoardComponents, selectedComp, setSelectedComp} = props;




  const PlaceBoardComponent = (e) => {
    if (e.target.className === "main-board-div") {
      let compType = placingComponent;
      let posX = e.pageX;
      let posY = e.pageY;
      let color = getRandomColor(compType);

      let content;
      switch (compType) {
        case "sticky note":
          content = "";
          break;
        case "list":
          content = [];
          break;
        case "sheet":
          content = "";
          break;
        default:
          break;
      }

      setPlacingComponent("");
      
      let thisCompData = [compType, posX, posY, color, content];

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
              boardName={name}
              compIndex={i}
              posX={val[1]} 
              posY={val[2]} 
              color={val[3]}
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              key={i}
            />
          case "list":
            return <List
              boardName={name}
              compIndex={i}
              posX={val[1]} 
              posY={val[2]} 
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              key={i}
            />
          case "sheet":
            return <Sheet
              boardName={name}
              compIndex={i}
              posX={val[1]} 
              posY={val[2]} 
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
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
