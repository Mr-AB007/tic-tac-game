import { useState } from "react";
import Board from "./components/Board";

export default function Game(){

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXnext,setIsXnext] = useState(true)

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setIsXnext(!isXnext);
  }


  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

   return (
    <div className="game">
      <div className="game-board">
         <Board isXnext={isXnext} square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}