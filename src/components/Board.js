import { useEffect, useRef } from 'react';
import '../styles/Board.css';
import MiniStickyNote from './boardComponents/MiniStickyNote';
import StickyNote from './boardComponents/StickyNote';
import List from './boardComponents/List';
import Sheet from './boardComponents/Sheet';
import Pin from './boardComponents/Pin';
import React from 'react';


function Board(props) {

  const {name, placingComponent, setPlacingComponent, boardComponents, setBoardComponents, selectedComp, setSelectedComp, placingData} = props;

  const boardRef = useRef(null);

  const getMousePosition = (canvas, posX, posY) => {
    if (!canvas) {
      return -1;
    }
    let rect = canvas.getBoundingClientRect();
    let x = posX - rect.left;
    let y = posY - rect.top;
    return ([x, y]);
  }


  const PlaceBoardComponent = (e) => {
    if (e.target.className === "main-board-div") {
      if (!selectedComp) {
        // PLACE
        let compType = placingComponent;
        let posX = getMousePosition(boardRef.current, e.clientX, e.clientY)[0];
        let posY = getMousePosition(boardRef.current, e.clientX, e.clientY)[1];
        let color = placingData[1];
        let font = placingData[2];
        let fontColor = placingData[3];

        let content;
        switch (compType) {
          case "mini sticky note":
            content = "";
            break;
          case "sticky note":
            content = "";
            break;
          case "list":
            content = [];
            break;
          case "sheet":
            content = "";
            break;
          case "pin":
            content = undefined;
            break;
          default:
            break;
        }

        setPlacingComponent("");
        
        let thisCompData = [compType, posX, posY, color, font, fontColor, content];

        let newBoardComps = boardComponents;
        newBoardComps[name].push(thisCompData);

        setBoardComponents(newBoardComps);

      } else {
        // MOVE
        let movedKey = selectedComp.getAttribute("k");
        setSelectedComp(null);

        let posX = getMousePosition(boardRef.current, e.clientX, e.clientY)[0];
        let posY = getMousePosition(boardRef.current, e.clientX, e.clientY)[1];

        let newBoardComps = boardComponents;

        newBoardComps[name][movedKey][1] = posX;
        newBoardComps[name][movedKey][2] = posY;

        setBoardComponents(newBoardComps);
        setPlacingComponent("");
      }
      
      localStorage.setItem("board-comps", JSON.stringify(boardComponents));
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
    <div className="main-board-div" ref={boardRef}>
      {((boardComponents !== null) && boardComponents[name] && boardComponents[name].length > 0) ? boardComponents[name].map((val, i) => {
        switch (val[0]) {
          case "mini sticky note":
            return <MiniStickyNote
            boardName={name}
            compIndex={i}
            data={val.slice(1,6)}
            boardComponents={boardComponents}
            setBoardComponents={setBoardComponents}
            selectedComp={selectedComp}
            setSelectedComp={setSelectedComp}
            k={i}
            key={i}
            
          />
          case "sticky note":
            return <StickyNote
              boardName={name}
              compIndex={i}
              data={val.slice(1,6)}
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              k={i}
              key={i}
              
            />
          case "list":
            return <List
              boardName={name}
              compIndex={i}
              data={val.slice(1,6)}
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              k={i}
              key={i}
              
            />
          case "sheet":
            return <Sheet
              boardName={name}
              compIndex={i}
              data={val.slice(1,6)}
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              k={i}
              key={i}
              
            />
          case "pin":
            return <Pin
              data={val.slice(1,4)}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              k={i}
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
