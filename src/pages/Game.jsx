import { useState } from "react";
import { Link } from "react-router-dom";
import { Square } from "../components/Square";
import { useUserData } from "../context/UserDataProvider";
import { checkWinner } from "../utils/checkWinner";

const Board = ({ squares, clickHandler }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} index={i} clickHandler={clickHandler} />
    ))}
  </div>
);

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const {
    state: { chosenSide, opponent },
  } = useUserData();
  const [crossIsNext, setCrossIsNext] = useState(
    chosenSide === "X" ? true : false
  );
  const [winner, setWinner] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const xO = crossIsNext ? "X" : "O";

  const handleClick = (i) => {
    if (!squares[i]) {
      const updatedSquares = squares.map((box, idx) => (i === idx ? xO : box));
      setSquares(updatedSquares);
      setCrossIsNext((crossIsNext) => !crossIsNext);
      const winner = checkWinner(updatedSquares);
      if (winner) {
        setWinner(winner);
        winner === chosenSide
          ? setScore1((score) => score + 1)
          : setScore2((score) => score + 1);
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
      <div className="m-auto text-center">
        {winner && (
          <div className="result">
            {winner === chosenSide
              ? "Alex won the game 🍰"
              : `${opponent} won the game 🍰`}
          </div>
        )}
        <div className="flex justify-around items-center p-tb1">
          <p>Alex</p>
          <span className="capsule">{`${score1}-${score2}`}</span>
          <p>{opponent}</p>
        </div>
        <Board squares={squares} clickHandler={handleClick} />
        <button className="btn primary-btn mt-1" onClick={resetGame}>
          Play again
        </button>
        <Link to="/" className="btn-icon rounded-full mt-3">
          <i className="fas fa-cog text-blue"></i>
        </Link>
      </div>
    </>
  );
};
