// src/App.jsx
import React, { useState } from 'react';
import './styles.css';
import { makeMark } from "./helpers.js";

function App() {
  const [mark, setMark] = useState("X");
  const [outerGame, setOuterGame] = useState(Array(9).fill(Array(9).fill(true))); // 2D array of empty game boards

  const handleClick = (event, outIndex, innerIndex) => {
    let newOuterGame = outerGame.map((innerGame, i) => {
        if (i === outIndex) { // check if this is the innerGame we were in
          let newInnerGame = [...innerGame]; // shallow copy of original
          newInnerGame[innerIndex] = false;
          let element = event.currentTarget;
          makeMark(mark, element, outIndex, innerIndex);
          setMark(mark == "X" ? "O" : "X"); // swap
          return newInnerGame;
        }
        return innerGame;
    });
    setOuterGame(newOuterGame);
  }


  return ( // javascript returning what looks like html, this is why we use .jsx 
    <div className="appBody">
      <div id="textBox"><em id="text">Now Playing: X</em></div>
        <div id="board">
          <div id="outer-game">
            {outerGame.map((innerGame, outIndex) => (
              <div className="inner-board" key={outIndex}>
                <div className="outerMark" id={outIndex + "mark"}></div>
                <div className="inner-game" id={outIndex + "game"}>
                  {innerGame.map((square, innerIndex) => ( 
                    <div className="unmarked_square" id={innerIndex} key={innerIndex} onClick={innerGame[innerIndex] ? (event) => handleClick(event, outIndex, innerIndex) : undefined}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;
