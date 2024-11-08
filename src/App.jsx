import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
