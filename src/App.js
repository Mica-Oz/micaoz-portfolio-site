import Home from "./Home/Home.js";
import About from "./About/About.js";
import SWE from "./SWE/Swe.js";
import Gallery from "./Gallery/Gallery.js";
import Construction from "./Home/Construction.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swe" element={<SWE />} />

          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/construction" element={<Construction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
