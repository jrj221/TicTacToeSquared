// src/App.jsx
import React, { useState } from 'react';
import './styles.css';
import { circleFadeIn, circleFadeOut, makeMark } from "./helpers.js";

function App() {
  const [mark, setMark] = useState("X");
  const [innerGame, setInnerGame] = useState(Array(9).fill(true)); // empty inner game

  const handleClick = (event, index) => {
    let element = event.currentTarget;
    makeMark(mark, element);
    circleFadeOut(event);
    setMark(mark == "X" ? "O" : "X"); // swap
    let newInnerGame = [...innerGame]; // creates a shallow copy
    newInnerGame[index] = false;
    setInnerGame(newInnerGame);
  };

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
                <div className="inner-board">
                  <div className="inner-game">
                    {innerGame.map((square, index) => ( 
                      <div className="select-circle" key={index} onClick={innerGame[index] ? (event) => handleClick(event, index) : undefined} onMouseOver={innerGame[index] ? handleOver : undefined} onMouseOut={innerGame[index] ? handleOut : undefined}><div className="markable_square">{index+1}</div></div>
                    ))}
                  </div>
                </div>
                <div className="inner-board">2</div>
                <div className="inner-board">3</div>
                <div className="inner-board">4</div>
                <div className="inner-board">5</div>
                <div className="inner-board">6</div>
                <div className="inner-board">7</div>
                <div className="inner-board">8</div>
                <div className="inner-board">9</div>
            </div>
        </div>
    </div>
  );
}

export default App;
