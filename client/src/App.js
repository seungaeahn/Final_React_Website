import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NumberGuessingGame from "./Component/Game/NumberGuessingGame";
import Quiz from "./Component/Game/Quiz";
import Todo from "./Todo";
import Movie from "./MovieListCarousel";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/todo" element={<Todo />} />
          </Routes>
          <Routes>
            <Route path="/movie" element={<Movie />} />
          </Routes>
          <Routes>
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
          </Routes>
          <Routes>
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
