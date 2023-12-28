import logo from "./logo.svg";
import "./App.css";
import Quiz from "./Quiz";
import NumberGuessingGame from "./Component/Game/NumberGuessingGame";

import { Router, Route, Routes, Link } from "react-router-dom";

function Game() {
  return (
    <Router>
      <div className="Container mt-4">
        <h1 className="text-center">게임 웹 사이트</h1>
        <nav className="nav justify-content mt-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/number-guessing-game" className="nav-link">
            Number Guessing Game
          </Link>
          <Link to="/quiz" className="nav-link">
            Quiz
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<GameHome />} />
          <Route
            path="/number-guessing-game"
            element={<NumberGuessingGame />}
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

const GameHome = () => {
  return (
    <div>
      <h2 className="text-center mt-3">어떤 게임을 플레이하시겠습니까?</h2>
    </div>
  );
};

export default Game;
