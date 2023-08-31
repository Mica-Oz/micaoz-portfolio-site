import Home from "./Home/Home.js";
import About from "./About/About.js";

import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {/* <About /> */}
      </div>
    </Router>
  );
}

export default App;
