import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePags from "./CreatePage";
function Todo() {
  //js로 state 상태관리

  const Home = () => <div>Home</div>;
  const [action, setAction] = useState([]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={Todo}>
            메인
          </Route>
          <Route path="/create" element={CreatePags}>
            생성
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Todo;
