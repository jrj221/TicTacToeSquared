// src/App.jsx
import React from 'react';
import './styles.css';
import { events } from "./helpers.js";

function App() {
  events();

  return ( // javascript returning what looks like html, this is why we use .jsx 
    <div className="appBody">
        <div id="board">
            <div id="outer-game">
                <div className="inner-board">
                  <div className="inner-game">
                    <div className="select-circle"><div className="markable_square">1</div></div>
                    <div className="select-circle"><div className="markable_square">2</div></div>
                    <div className="select-circle"><div className="markable_square">3</div></div>
                    <div className="select-circle"><div className="markable_square">4</div></div>
                    <div className="select-circle"><div className="markable_square">5</div></div>
                    <div className="select-circle"><div className="markable_square">6</div></div>
                    <div className="select-circle"><div className="markable_square">7</div></div>
                    <div className="select-circle"><div className="markable_square">8</div></div>
                    <div className="select-circle"><div className="markable_square">9</div></div>
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
