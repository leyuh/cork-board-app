import { useEffect } from 'react';
import '../styles/Board.css';
import MiniStickyNote from './boardComponents/MiniStickyNote';
import StickyNote from './boardComponents/StickyNote';
import List from './boardComponents/List';
import Sheet from './boardComponents/Sheet';
import React from 'react';
import BoardTools from './BoardTools';


function Board(props) {

  const {name, placingComponent, setPlacingComponent, boardComponents, setBoardComponents, selectedComp, setSelectedComp, placingColor, setPlacingColor} = props;




  const PlaceBoardComponent = (e) => {
    if (e.target.className === "main-board-div") {
      if (!selectedComp) {
        // PLACE
        let compType = placingComponent;
        let posX = e.pageX;
        let posY = e.pageY;
        let color = placingColor;

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
          default:
            break;
        }

        setPlacingComponent("");
        setPlacingColor("");
        
        let thisCompData = [compType, posX, posY, color, content];

        let newBoardComps = boardComponents;
        newBoardComps[name].push(thisCompData);

        setBoardComponents(newBoardComps);
        console.log(boardComponents);

      } else {
        // MOVE
        let movedKey = selectedComp.getAttribute("k");
        setSelectedComp(null);

        let posX = e.pageX;
        let posY = e.pageY;

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
    <div className="main-board-div">
      {((boardComponents !== null) && boardComponents[name] && boardComponents[name].length > 0) ? boardComponents[name].map((val, i) => {
        switch (val[0]) {
          case "mini sticky note":
            return <MiniStickyNote
            boardName={name}
            compIndex={i}
            posX={val[1]} 
            posY={val[2]} 
            color={val[3]}
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
              posX={val[1]} 
              posY={val[2]} 
              color={val[3]}
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
              posX={val[1]} 
              posY={val[2]} 
              color={val[3]}
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
              posX={val[1]} 
              posY={val[2]} 
              color={val[3]}
              boardComponents={boardComponents}
              setBoardComponents={setBoardComponents}
              selectedComp={selectedComp}
              setSelectedComp={setSelectedComp}
              k={i}
              key={i}
              
            />

          default:
            return ""
        }
      }) : ""}

      {selectedComp ? <BoardTools 
        boardName={name}
        boardComponents={boardComponents}
        setBoardComponents={setBoardComponents}
        selectedComp={selectedComp}
        setSelectedComp={setSelectedComp}
        setPlacingComponent={setPlacingComponent}
      /> : ""}
    </div>
  );
}

export default Board;
