// src/App.jsx
import React, { useState } from 'react';
import './styles.css';
import { circleFadeIn, circleFadeOut, makeMark } from "./helpers.js";

function App() {
  const [mark, setMark] = useState("X");
  const [outerGame, setOuterGame] = useState(Array(9).fill(Array(9).fill(true))); // 2D array of empty game boards

  const handleClick = (event, outIndex, innerIndex) => {
    let newOuterGame = outerGame.map((innerGame, i) => {
        if (i === outIndex) { // is this the innerGame we were in?
          let newInnerGame = [...innerGame]; // shallow copy of original
          newInnerGame[innerIndex] = false;
          let element = event.currentTarget;
          makeMark(mark, element);
          circleFadeOut(event);
          setMark(mark == "X" ? "O" : "X"); // swap
          return newInnerGame;
        }
        return innerGame;
    });
    setOuterGame(newOuterGame);
  }

  const handleOver = (event) => {
    circleFadeIn(event);
  };

  const handleOut = (event) => {
    circleFadeOut(event);
  };


  return ( // javascript returning what looks like html, this is why we use .jsx 
    <div className="appBody">
        <div id="board">
            <div id="outer-game">
              {outerGame.map((innerGame, outIndex) => (
                <div className="inner-board" key={outIndex}>
                  <div className="inner-game">
                    {innerGame.map((square, innerIndex) => ( 
                      <div className="select-circle" key={innerIndex} onClick={innerGame[innerIndex] ? (event) => handleClick(event, outIndex, innerIndex) : undefined}><div className="markable_square"></div></div>
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
