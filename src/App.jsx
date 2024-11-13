import HomePage from "./HomePage";
import Gallery from "./Gallery";
import Resume from "./Resume";
import CaseStudy from "./CaseStudy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/frictionlessfashion' element={<CaseStudy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
