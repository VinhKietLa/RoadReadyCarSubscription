import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Browse from "./Components/Browse";

import CarDetails from "./Components/CarDetails"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} exact />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<Home />} />
          <Route path="/car-details/:id" element={<CarDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
